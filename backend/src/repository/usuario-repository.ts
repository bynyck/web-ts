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
        SELECT id,nome,email,telefone FROM usuarios
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

export async function atualizarUsuarioRepository(id: number, dados: UsuarioCadastro): Promise<Usuario | null> {

    const { nome, email, telefone } = dados;

    const resposta = await pool.query<Usuario>(`
        UPDATE usuarios
        SET nome = $1, 
            email = $2, 
            telefone = $3
        WHERE id = $4
        RETURNING
            id,
            nome,
            email,
            telefone
    `,[nome,email,telefone,id])
    
    return resposta.rows[0] ?? null;
    
}

export async function deletarUsuarioRepository(id: number): Promise<Usuario | null> {
    const resposta = await pool.query<Usuario>(`
        DELETE FROM usuarios 
        WHERE id = $1
        RETURNING
            id,
            nome,
            email,
            telefone
    `, [id]);

    return resposta.rows[0] ?? null;
}