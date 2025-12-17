import { ButtonHTMLAttributes } from "react";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;


export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button className="button" {...rest}>
      {children ?? "Enviar"}
    </button>
  )
}
