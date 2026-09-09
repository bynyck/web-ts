import type { Request, Response, NextFunction } from "express";
import { ErroAplicacao } from "../error/Erro-aplicacao.js";

export function tratarErros(erro: unknown, _req: Request, res: Response, _next: NextFunction): Response {
    if(erro instanceof ErroAplicacao) {
        return res.status(erro.statusCode).json({
            sucesso: false,
            mensagem: erro.message,
            detalhes: erro.detalhes
        });
    }

    console.error("Erro não tratado", erro);

    return res.status(500).json({
        sucesso: false,
        mensagem: "Erro interno no servidor"
    });
}