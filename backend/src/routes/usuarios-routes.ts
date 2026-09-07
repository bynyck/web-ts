import { Router } from "express";
import { cadastrarUsuarioController, listarUsuariosController } from "../controllers/usuario-controllers.js";

export const usuarioRouter: Router = Router();

usuarioRouter.get("/", listarUsuariosController);

usuarioRouter.post("/", cadastrarUsuarioController);