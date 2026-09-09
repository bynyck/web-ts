import { Router } from "express";
import { cadastrarUsuarioController, listarUsuariosController, atualizarUsuarioController, deletarUsuarioController } from "../controllers/usuario-controllers.js";
import { validarRequsicao as validarRequisicao } from "../middlewares/validar-requisicao.js";
import { cadastroUsuario, updateUsuario } from "../schemas/usuario-schemas.js";
import { idParamsSchema } from "../schemas/comunsSchemas.js";

export const usuarioRouter: Router = Router();

usuarioRouter.get("/", listarUsuariosController);

usuarioRouter.post("/", validarRequisicao(cadastroUsuario, "body"), cadastrarUsuarioController);

usuarioRouter.patch("/:id", validarRequisicao(idParamsSchema, "params"),validarRequisicao(updateUsuario, "body"), atualizarUsuarioController);

usuarioRouter.delete("/:id", validarRequisicao(idParamsSchema, "params"), deletarUsuarioController);
