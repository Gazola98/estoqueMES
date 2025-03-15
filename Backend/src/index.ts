import express, {Request, Response} from "express";
const app = express();

app.use(express.json())

const cors = require('cors');
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json());

require("dotenv").config();


app.get("/", (req: Request, res: Response) =>{
    res.send("Bem vindo ao menu!")
})

// criar a rota GET principal
import DeviceController from './controllers/DeviceController'

// criar rotas
app.use("/", DeviceController)

app.listen(3535, () => {
    console.log("Servidor rodando na porta 3535");
})