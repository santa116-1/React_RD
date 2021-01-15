import React from 'react'
import { Dialog as ReachDialog } from '@reach/dialog'
import { Heading } from 'ProjectPlanner/Heading'
import './Dialog.scss'

type Props = {
  onClose(): void
  [key: string]: any
}

export const Dialog: React.FC<Props> = ({ onClose, children, ...props }) => {
  return (
    <ReachDialog {...props} onDismiss={onClose}>
      <div className="dialog-content">{children}</div>
    </ReachDialog>
  )
}

type DialogConfirmProps = {
  onConfirm(): void
  onCancel(): void
  [key: string]: any
}

export const DialogConfirm: React.FC<DialogConfirmProps> = ({
  children,
  onConfirm,
  onCancel,
  ...props
}) => {
  return (
    <Dialog {...props} onClose={onCancel}>
      <div className="spacing">
        <div>{children}</div>
        <footer className="horizontal-spacing">
          <button onClick={onConfirm} className="button button-green">
            Yes
          </button>
          <button onClick={onCancel} className="button button-red">
            No
          </button>
        </footer>
      </div>
    </Dialog>
  )
}
