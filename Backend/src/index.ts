import express, {Request, Response} from "express";

const app = express();


app.use(express.json())

app.get("/", (req: Request, res: Response) =>{
    res.send("Bem vindo ao menu!")
})

app.listen(3535, () => {
    console.log("Servidor rodando na porta 3535");
})