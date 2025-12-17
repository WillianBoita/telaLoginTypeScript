import { InputTypes } from "./types"
import React, { forwardRef } from "react"

function Input({ placeholder, type, ...rest }: InputTypes, ref: React.Ref<HTMLInputElement>) {
  return (
    <input ref={ref} className="input" type={type} placeholder={placeholder} {...rest}/>
  )
}

export default forwardRef(Input);