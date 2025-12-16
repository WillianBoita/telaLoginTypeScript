import Button from "../Button"
import Input from "../Input"

export default function Form() {
  return (
    <div className="form-data">
      <h1 className="form-title">Login</h1>
      <div className="input-section">
        <Input placeholder="Nome" type="text"/>
        <Input placeholder="Senha" type="password"/>
      </div>
      <Button/>
    </div>
  )
}
