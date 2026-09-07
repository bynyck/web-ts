import { Router } from "express";
import { cadastrarUsuarioController, listarUsuariosController, deletarUsuarioController } from "../controllers/usuario-controllers.js";

export const usuarioRouter: Router = Router();

usuarioRouter.get("/", listarUsuariosController);

usuarioRouter.post("/", cadastrarUsuarioController);

usuarioRouter.delete("/:id", deletarUsuarioController);