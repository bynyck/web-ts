import z from "zod";

export const cadastroUsuario = z.strictObject({
    nome: z.string().trim().min(3, "Nome deve ter no minimo 3 caracteres"),
    email: z.email("E-mail inválido").toLowerCase(),
    telefone: z.string().regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, "Número de telefone inválido. Use o formato (XX) XXXXX-XXXX")
})

export const updateUsuario = cadastroUsuario;