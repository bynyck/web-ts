import { test, describe, expect } from "vitest"
import { updateUsuario } from "../src/schemas/usuario-schemas"

describe("updateUsuario", () => {
    test("Deve atualizar usuario", () => {
        const dados = {
            nome: "Nicollas",
            email: "nicollas@example.com",
            telefone: "(21) 99999-9999"
        }
        
        const resultado = updateUsuario.safeParse(dados);
        
        expect(resultado.success).toBe(true)
    })

    test("Deve rejeitar update usuário", () => {
        const dados = {
            nome: "Nicollas",
            email: "nicollas@example.com",
            telefone: "21 999999999"
        };

        const resultado = updateUsuario.safeParse(dados);

        expect(resultado.success).toBe(false);
    })
})