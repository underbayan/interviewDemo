import { buttonStyle } from './Button.module.scss'
import { memo, MouseEventHandler } from "react"

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const Button = memo(({ text, className, onClick, disabled }: ButtonProps) => {
  return (
    <button disabled={disabled} className={`${buttonStyle} ${className}`} onClick={onClick}>
      {text}
    </button>
  )
})
