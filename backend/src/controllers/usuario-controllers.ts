import type { Request, Response } from "express";
import { listarUsuariosService, cadastrarUsuarioService, deletarUsuarioService } from "../services/usuario-services.js"
import type {UsuarioCadastro } from "../models/usuario-models.js";

export async function listarUsuariosController(_req: Request, res: Response): Promise<Response> {

    const resposta = await listarUsuariosService();

    return res.status(200).json(resposta)

}

export async function cadastrarUsuarioController(req: Request, res: Response): Promise<Response> {

    const dados: UsuarioCadastro = req.body;

    const resposta = await cadastrarUsuarioService(dados);

    return res.status(201).json(resposta);

}

export async function deletarUsuarioController(req: Request, res: Response): Promise<Response> {

    const { id } = req.params;

    const resposta = await deletarUsuarioService(Number(id));

    return res.status(200).json(resposta);

}