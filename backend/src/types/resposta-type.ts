import type { Usuario } from "../models/usuario-models.js";

export interface RespostaListarUsuariosService {
    sucesso: boolean,
    mensagem: string,
    usuarios: Usuario[]
}