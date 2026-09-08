import { Router } from "express";
import { cadastrarUsuarioController, listarUsuariosController, atualizarUsuarioController, deletarUsuarioController } from "../controllers/usuario-controllers.js";

export const usuarioRouter: Router = Router();

usuarioRouter.get("/", listarUsuariosController);

usuarioRouter.post("/", cadastrarUsuarioController);

usuarioRouter.patch("/:id", atualizarUsuarioController);

usuarioRouter.delete("/:id", deletarUsuarioController);
