import 'reflect-metadata'
import { DataSource } from "typeorm";
import { Device } from './entity/Device'



export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "estoque",
    synchronize: true,
    logging: true,
    entities: [Device],
    subscribers: [],
    migrations: [__dirname + "migrations/*.js"],
})

AppDataSource.initialize()
.then(() => {
    console.log("Conexão com o banco de dados realizado!");
}).catch((error) =>{
    console.log("Erro na conexão com o banco", error);
})