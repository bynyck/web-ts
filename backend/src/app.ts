import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import { usuarioRouter } from "./routes/usuarios-routes.js";
import { registrarRequisicao } from "./middlewares/registrar-requisicao.js";
import { tratarErros } from "./middlewares/tratar-erros.js";
import { rotaNaoEncontrada } from "./middlewares/rota-nao-encontrada.js";

export default function createApp() {

    const app = express();

    app.use(express.json());

    app.use(cors());

    app.use(registrarRequisicao);

    app.get("/", (_req: Request, res: Response) => {
        res.send("Hello World");
    })

    app.use("/usuarios",usuarioRouter);

    app.use(rotaNaoEncontrada);

    app.use(tratarErros);

    return app;
    
}