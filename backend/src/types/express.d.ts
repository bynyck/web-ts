export {};

declare global{
    namespace Express{
        interface Request {
            dadosValidados?: {
                body?: unknown,
                params?: unknown
            }
        }
    }
}