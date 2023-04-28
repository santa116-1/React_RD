import { Outlet } from '@remix-run/react'

// localhost:3000                    DefaultLayout   "Home Page"
// localhost:3000/contact            DefaultLayout   "Contact"
// localhost:3000/auth/login         AuthLayout      "Login"
// localhost:3000/auth/register      AuthLayout      "Register"
// localhost:3000/products           ProductsLayout  "Browse Products"
// localhost:3000/products/1         ProductsLayout  "Product Profile: 1"
// localhost:3000/products/special   ProductsLayout  "Special Product Profile"

// Gray
function DefaultLayout() {
  return (
    <div className="p-3 bg-slate-300 border rounded space-y-3">
      <div className="p-3 bg-slate-200 rounded">
        <h1>Default Layout</h1>
      </div>
      <div className="flex gap-3">
        <main className="flex-1 p-3 bg-slate-200 rounded">
          <Outlet />
        </main>
        <aside className="w-52 min-h-[200px] p-3 bg-slate-200 rounded">Sidebar</aside>
      </div>
    </div>
  )
}

// Green
function AuthLayout() {
  return (
    <div className="p-3 bg-green-300 border rounded space-y-3">
      <div className="p-3 bg-green-200 rounded">
        <h1>Auth Layout</h1>
      </div>
      <main className="p-3 bg-green-200 rounded">
        <Outlet />
      </main>
    </div>
  )
}

// Blue
function ProductsLayout() {
  return (
    <div className="p-3 bg-blue-300 border rounded space-y-3">
      <div className="p-3 bg-blue-200 rounded">
        <h1>Products Layout</h1>
      </div>
      <div className="flex gap-3">
        <main className="flex-1 p-3 bg-blue-200 rounded">
          <Outlet />
        </main>
        <aside className="w-52 min-h-[200px] p-3 bg-blue-200 rounded">Sidebar</aside>
      </div>
    </div>
  )
}
