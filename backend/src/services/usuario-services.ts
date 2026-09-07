import type { Usuario, UsuarioCadastro } from "../models/usuario-models.js";
import { buscarUsuarioPeloEmailRepository, cadastrarUsuarioRepository, deletarUsuarioRepository, listarUsuariosRepository } from "../repository/usuario-repository.js";
import type { RespostaCadastrarUsuarioService, RespostaDeletarUsuarioService, RespostaListarUsuariosService } from "../types/resposta-type.js";

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

export async function cadastrarUsuarioService(dados: UsuarioCadastro): Promise<RespostaCadastrarUsuarioService> {
    const { email } = dados;

    const emailExiste = await buscarUsuarioPeloEmailRepository(email);

    if(emailExiste) {
        throw new Error("Usuário já cadastrado");
    }

    const usuario = await cadastrarUsuarioRepository(dados);

    return {
        sucesso: true,
        mensagem: "Usuario cadastrado com sucesso",
        usuario
    }

}

export async function deletarUsuarioService(id: number): Promise<RespostaDeletarUsuarioService> {

    const usuario = await deletarUsuarioRepository(id);

    if(usuario) {
        throw new Error("Falha ao deletar usuário");
    }


    return {
        sucesso: true,
        mensagem: "Usuário deletado com sucesso",
        usuario
    }

}