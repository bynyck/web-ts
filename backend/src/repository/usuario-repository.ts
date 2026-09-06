import { pool } from "../database/database.js";
import type { Usuario } from "../models/usuario-models.js";

export async function listarUsuariosRepository(): Promise<Usuario[]> {
    const resposta = await pool.query<Usuario>(`
        SELECT id, nome, email, telefone FROM usuarios
    `)
            
    return resposta.rows
}