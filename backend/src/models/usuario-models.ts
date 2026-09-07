export interface Usuario{
    id: number,
    nome: string,
    email: string,
    telefone: string
}

export type UsuarioCadastro = Pick<Usuario, "nome" | "email" | "telefone">
