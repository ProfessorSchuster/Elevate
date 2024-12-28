import express, { Request, Response } from "express";

const app = express();
const port = 5000;

app.get("/", (req: Request, res: Response) => {
    res.send("Backend läuft mit TypeScript!");
});

app.listen(port, () => {
    console.log(`Backend läuft auf http://localhost:${port}`);
});
