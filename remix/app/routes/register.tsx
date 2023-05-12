import { useState } from 'react'
import * as z from 'zod'
import { json } from '@remix-run/node'
import { Form, useActionData, Link } from '@remix-run/react'
import { createUserSession, login, registerUser } from '~/utils/auth.server'
import { usernameExists } from '~/utils/db.server'
import { FieldWrap } from '~/components/FormFields'
import { Heading } from '~/components/Heading'
import type { ActionArgs } from '@remix-run/node'

const formSchema = z.object({
  username: z.string().min(5),
  password: z.string().min(5),
})

type FormDataType = z.infer<typeof formSchema>
type FormErrorType = {
  [k in keyof FormDataType]?: string[] | undefined
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData()
  const formValues = Object.fromEntries(formData)
  const results = formSchema.safeParse(formValues)
  if (!results.success) return json({ error: 'Invalid Data' }, { status: 400 })

  const { username, password } = results.data
  const userExists = await usernameExists(username)
  if (userExists) return json({ error: 'Username already registered' }, { status: 400 })

  const userId = await registerUser(username, password)
  if (!userId) return json({ error: 'We were not able to register this user' }, { status: 400 })

  return createUserSession(userId, '/')
}

export default function Register() {
  const [formErrors, setFormErrors] = useState<FormErrorType>()
  const { error } = useActionData<typeof action>() || {}

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    const formValues = Object.fromEntries(new FormData(event.currentTarget))
    const results = formSchema.safeParse(formValues)
    if (!results.success) {
      event.preventDefault()
      setFormErrors(results.error.flatten().fieldErrors)
    }
  }

  return (
    <div className="ml-auto mr-auto max-w-[600px]">
      <div className="bg-white rounded-md shadow-md p-6 space-y-6">
        <Heading size={4}>Register</Heading>
        {error && <div className="notice">{error}</div>}
        <Form onSubmit={onSubmit} method="post" className="space-y-3">
          <FieldWrap label="Username" required errors={formErrors?.username}>
            <input className="form-field" type="text" name="username" />
          </FieldWrap>
          <FieldWrap label="Password" required errors={formErrors?.password}>
            <input className="form-field" type="password" name="password" />
          </FieldWrap>
          <footer className="flex justify-between items-center">
            <div>
              <button type="submit" className="button">
                Register
              </button>
            </div>
            <div>
              <Link to="/login" type="button">
                Already have an account? Login
              </Link>
            </div>
          </footer>
        </Form>
      </div>
    </div>
  )
}