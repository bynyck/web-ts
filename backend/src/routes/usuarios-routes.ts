import { Router } from "express";
import { listarUsuariosController } from "../controllers/usuario-controllers.js";

export const usuarioRouter: Router = Router();

usuarioRouter.get("/", listarUsuariosController);