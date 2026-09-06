import { listarUsuariosRepository } from "../repository/usuario-repository.js";
import type { RespostaListarUsuariosService } from "../types/resposta-type.js";

export async function listarUsuariosService(): Promise<RespostaListarUsuariosService> {
    const usuarios = await listarUsuariosRepository();

    if(usuarios.length === 0) {
        return {
            sucesso: true,
            mensagem: "Nenhum usuario encontrado",
            usuarios
        }
    }

    return {
        sucesso: true,
        mensagem: "Usuarios encontrados com sucesso",
        usuarios
    }
}