import "dotenv/config";
import createApp from "./app.js";

const app = createApp();
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})