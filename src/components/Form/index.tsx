import Button from "../Button"
import Input from "../Input"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "../../validation"

export default function Form() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isValid }
    } = useForm({
    resolver: yupResolver(loginSchema) , 
    mode: "onChange" 
    })

  function onSubmit(data: any) {
    console.log("dados:", data)
  }

  return (
    <div className="form-data">
      <h1 className="form-title">Login</h1>
      <div className="input-section">
        <Input placeholder="Nome" type="text" {...register("name")}/>
        {errors.name && <span>{errors.name.message}</span>}
        <Input placeholder="Senha" type="password" {...register("password")}/>
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <Button onClick={handleSubmit(onSubmit)} disabled={!isValid}/>
    </div>
  )
}
