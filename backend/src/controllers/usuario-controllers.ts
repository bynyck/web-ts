import type { Request, Response } from "express";
import { listarUsuariosService } from "../services/usuario-services.js"

export async function listarUsuariosController(_req: Request, res: Response): Promise<Response> {
    const resposta = await listarUsuariosService();

    return res.status(200).json(resposta)
}