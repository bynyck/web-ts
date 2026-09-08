import z from "zod";

export const idParamsSchema = z.strictObject({
    id: z.coerce.number({"error": "id deve ser um numero"}).int("O id deve ser um numero inteiro").positive("O id deve ser um numero positivo")
})