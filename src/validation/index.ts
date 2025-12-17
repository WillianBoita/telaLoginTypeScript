import * as yup from "yup";

export const loginSchema = yup.object({
  name: yup
    .string()
    .required("Nome é obrigatório"),

  password: yup
    .string()
    .min(6, "Mínimo 6 caracteres")
    .required("Senha obrigatória"),
});
