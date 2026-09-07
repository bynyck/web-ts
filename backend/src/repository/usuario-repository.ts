import { pool } from "../database/database.js";
import type { Usuario, UsuarioCadastro } from "../models/usuario-models.js";

export async function listarUsuariosRepository(): Promise<Usuario[]> {
    const resposta = await pool.query<Usuario>(`
        SELECT id, nome, email, telefone FROM usuarios
    `)
            
    return resposta.rows
}

export async function buscarUsuarioPeloEmailRepository(email: string): Promise<Usuario | null> {
    const resposta = await pool.query<Usuario>(`
        SELECT id,nome,email,telefone from usuarios
        WHERE email = $1    
    `, [email]);

    return resposta.rows[0] ?? null;
}

export async function cadastrarUsuarioRepository(dados: UsuarioCadastro): Promise<Usuario> {

    const { nome, email, telefone } = dados;

    const resposta = await pool.query(`
        INSERT INTO usuarios (nome,email,telefone)
        VALUES ($1,$2,$3)
        RETURNING
        id,
        nome,
        email,
        telefone
    `, [nome,email,telefone])

    return resposta.rows[0];
}