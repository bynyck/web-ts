import type { Request, Response, NextFunction } from "express";
import type { ZodType} from "zod";
import { ErroAplicacao } from "../error/Erro-aplicacao.js";
import type { ErrosFormatados } from "../types/resposta-type.js";

type OrigemValidacao = "body" | "params";

export function validarRequsicao(schema: ZodType, origem: OrigemValidacao) {

    return (req: Request, _res: Response, next: NextFunction): void => {
        const resultado = schema.safeParse(req[origem]);
        
        if(!resultado.success) {
            const errosFormatados: ErrosFormatados[] = resultado.error.issues.map(erro => {
                return {
                    campo: erro.path.join("."),
                    mensagem: erro.message
                }
            })

            const erroAplicacao: ErroAplicacao = new ErroAplicacao("Os dados enviados são inválidos", 400, errosFormatados);

            return next(erroAplicacao);
        }

        req.dadosValidados ??= {};

        req.dadosValidados[origem] = resultado.data;

        next();

    }

}