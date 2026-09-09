import { ErroAplicacao } from "../error/Erro-aplicacao.js";
import type { Usuario, UsuarioCadastro } from "../models/usuario-models.js";
import { listarUsuariosRepository, buscarUsuarioPeloEmailRepository, cadastrarUsuarioRepository, atualizarUsuarioRepository, deletarUsuarioRepository } from "../repository/usuario-repository.js";
import type { RespostaAtualizarUsuarioService, RespostaCadastrarUsuarioService, RespostaDeletarUsuarioService, RespostaListarUsuariosService } from "../types/resposta-type.js";

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
        throw new ErroAplicacao("Usuário já cadastrado", 409);
    }

    const usuario = await cadastrarUsuarioRepository(dados);

    return {
        sucesso: true,
        mensagem: "Usuario cadastrado com sucesso",
        usuario
    }

}

export async function atualizarUsuarioService(id: number, dados: UsuarioCadastro): Promise<RespostaAtualizarUsuarioService> {

    const usuario = await atualizarUsuarioRepository(id, dados);

    if(!usuario) {
        throw new ErroAplicacao("Falha ao atualizar usuário", 404);
    }

    return {
        sucesso: true,
        mensagem: "Usuário atualizado com sucesso",
        usuario
    }

}

export async function deletarUsuarioService(id: number): Promise<RespostaDeletarUsuarioService> {

    const usuario = await deletarUsuarioRepository(id);

    if(!usuario) {
        throw new ErroAplicacao("Falha ao deletar usuário", 404);
    }


    return {
        sucesso: true,
        mensagem: "Usuário deletado com sucesso",
        usuario
    }

}