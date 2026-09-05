import "dotenv/config";
import createApp from "./app.js";
import { pool } from "./database/database.js";

const app = createApp();
const port = process.env.PORT

async function testarConexao(): Promise<void> {
    try {
        const resposta = await pool.query("SELECT 1 AS conectado");

        console.log("PostgreSQL conectado", resposta.rows[0].conectado);

    } catch(e: unknown) {
        if(e instanceof Error) {
            console.error(e.message);
        }
        process.exit(1);
    }
}

await testarConexao();


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})