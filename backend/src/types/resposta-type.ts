import type { Usuario } from "../models/usuario-models.js";

export interface RespostaListarUsuariosService {
    sucesso: boolean,
    mensagem: string,
    usuarios: Usuario[]
}

export interface RespostaCadastrarUsuarioService {
    sucesso: boolean,
    mensagem: string,
    usuario: Usuario
}

export interface ErrosFormatados {
    campo: string
    mensagem: string
}

export type RespostaDeletarUsuarioService = RespostaCadastrarUsuarioService;

export type RespostaAtualizarUsuarioService = RespostaCadastrarUsuarioService;