import { modalStyle, contentStyle, closeStyle } from './Modal.module.scss'
import { forwardRef, useState, useImperativeHandle, memo, useCallback, ReactNode } from 'react'

interface ModalProps {
  className?: string;
  closeCallback?: () => void;
  children: ReactNode
}

export interface ModalRef {
  setOpen: (open: boolean) => void;
}
export const Modal = memo(forwardRef<ModalRef, ModalProps>(({ children, className, closeCallback }, ref) => {
  const [open, setOpen] = useState(false)
  const closeFn = useCallback(() => {
    setOpen(false)
    closeCallback && closeCallback()
  }, [setOpen, closeCallback])
  useImperativeHandle(ref, () => ({ setOpen }), [setOpen])
  return open ? (
    <div className={`${modalStyle} ${className}`}>
      <div className={contentStyle}>
        <div className={closeStyle} onClick={closeFn}>✖</div>
        {children}
      </div>
    </div >
  ) : null
}))

