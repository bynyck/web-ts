import type { NextFunction, Request, Response } from "express";

export function registrarRequisicao(req: Request, res: Response, next: NextFunction): void {
    const metodo = req.method;

    const route = req.originalUrl;

    console.log(`[Method: ${metodo}] - [Route: ${route}]`);

    next();
}