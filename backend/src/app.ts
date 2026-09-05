import express from "express";
import type { Request, Response } from "express";
import cors from "cors";

export default function createApp() {
    const app = express();

    app.use(express.json());
    app.use(cors());

    app.get("/", (req: Request, res: Response) => {
        res.send("Hello World");
    })

    return app;
}