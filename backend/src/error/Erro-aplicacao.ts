import type { ErrosFormatados } from "../types/resposta-type.js";

export class ErroAplicacao extends Error {

    readonly statusCode: number;
    readonly detalhes?: ErrosFormatados[];

    constructor(mensagem: string, statusCode: number, detalhes?: ErrosFormatados[]) {
        super(mensagem);

        this.statusCode = statusCode;

        if(detalhes !== undefined) {
            this.detalhes = detalhes;
        }
    }
}