import { InputTypes } from "./types"

export default function Input({ placeholder, type }: InputTypes) {
  return (
    <input className="input" type={type} placeholder={placeholder}/>
  )
}
