import type { Request, Response } from "express";
import { listarUsuariosService, cadastrarUsuarioService, atualizarUsuarioService, deletarUsuarioService } from "../services/usuario-services.js"
import type {UsuarioCadastro } from "../models/usuario-models.js";

export async function listarUsuariosController(_req: Request, res: Response): Promise<Response> {

    const resposta = await listarUsuariosService();

    return res.status(200).json(resposta)

}

export async function cadastrarUsuarioController(req: Request, res: Response): Promise<Response> {

    const dados: UsuarioCadastro = req.dadosValidados?.body as UsuarioCadastro;

    const resposta = await cadastrarUsuarioService(dados);

    return res.status(201).json(resposta);

}

export async function atualizarUsuarioController(req: Request, res: Response): Promise<Response> {

    const { id } = req.dadosValidados?.params as {id: number};
    const dados: UsuarioCadastro = req.dadosValidados?.body as UsuarioCadastro
    
    const resposta = await atualizarUsuarioService(Number(id), dados);

    return res.status(200).json(resposta);
}

export async function deletarUsuarioController(req: Request, res: Response): Promise<Response> {

    const { id } = req.dadosValidados?.params as {id: number};

    const resposta = await deletarUsuarioService(Number(id));

    return res.status(200).json(resposta);

}