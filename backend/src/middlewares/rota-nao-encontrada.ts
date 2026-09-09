import type { Request , Response, NextFunction } from "express";

export function rotaNaoEncontrada(req: Request, res: Response, next: NextFunction): Response {
    const rota = req.originalUrl;

    return res.json(404).json({
        sucesso: false,
        mensagem: `[Rota: ${rota}] não encontrada`
    })

    next();
}