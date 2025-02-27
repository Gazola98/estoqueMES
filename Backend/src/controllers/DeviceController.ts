import express, {Request, Response} from "express";

import { AppDataSource } from "../data-source";

import { Device } from "../entity/Device"
import { Not } from "typeorm";

const router = express.Router();

// Rota para cadastrar os produtos
router.post("/devices", async (req: Request, res: Response) => {
    try{

        // receber os dados enviados no corpo da requisição
        var data = req.body;

        // criar uma instância do repositório de produtos
        const userRepository = AppDataSource.getRepository(Device);




        // Recuperar o registro do banco com o valor da coluna
        const existingDevice = await userRepository.findOne({ where: {device: data.device}})

        // Verificar se já existe produto cadastrado com o mesmo nome
        if(existingDevice) {
            res.status(400).json({
                message: "Este produto já está cadastrado!"
            });
            return;
        }

        // Criar um novo registro
        const newDevice = userRepository.create(data);

        // salvar o registro no banco de dados
        await userRepository.save(newDevice)

        //retornar resposta de sucesso ao cadastrar
        res.status(201).json({
            message: "Produto cadastrado com sucesso!",
            device: newDevice,
        })

    }catch (error){
        res.status(500).json({
            message: "Erro ao cadastrar produto"
        });
        return;
    }
})

// Rota para listar todos produtos
router.get("/devices", async (req: Request, res: Response) => {
try{

    const userRepository = AppDataSource.getRepository(Device);

    const device = await userRepository.find();

    res.status(200).json(device)
    return;
}catch(error) {
    res.status(500).json({
        message: "Erro ao visualizar produto"
    });
    return;
}
})

// Rota para listar produto especifico
router.get("/devices/:id", async (req:Request, res: Response) => {

    try{
         // Obter ID do usuário a partir da requisição
        const { id } = req.params;

        // obter repositório
        const userRepository = AppDataSource.getRepository(Device);

        // buscar usuário no banco pelo ID
        const device = await userRepository.findOneBy({ id: parseInt(id)});

        // verificar se usuario foi encontrado
        if(!device){
            res.status(404).json({
                message: "produto não econtrado"
            });
        }

        // retornar o produto
        res.status(200).json({ device });
        return;

    }catch(error){
        res.status(500).json({
            message: "Erro ao visualizar produto"
        });
        return;
    }
})

// Rota para editar produtos
router.put("/devices/:id", async (req: Request, res: Response) => {
    try{

        const { id } = req.params;

        const data = req.body;

        const userRepository = AppDataSource.getRepository(Device)

        const device = await userRepository.findOneBy({id: parseInt(id)});

        if(!device){
            res.status(404).json({
                message: "produto não encontrado"
            });
            return;
        }

        const existingDevice = await userRepository.findOne({
            where: {
                device: data.device,
                id: Not(parseInt(id)), // exclui o próprio registro de busca
            }
        })

        // verifica se o usuário foi encontrado
        if(existingDevice) {
            res.status(400).json({
                message: "Já existe um produto cadastrado com esse nome!"
            });
        }

        // Atualizar dados do usuário
        userRepository.merge(device, data);

        // salvar alterações no banco
        const updateDevice = await userRepository.save(device);

        res.status(200).json({
            message: "Produto editado com sucesso!",
            device: updateDevice,
        })

    }catch(error){
        res.status(500).json({
            message: "Erro ao visualizar produto"
        });
        return;
    }
})

// Rota para deletar produtos
router.delete("/devices/:id", async (req: Request, res: Response) => {
    try{
        
        const { id } = req.params;

        const userRepository = AppDataSource.getRepository(Device);

        const device = await userRepository.findOneBy({ id: parseInt(id)});

        if(!device){
            res.status(404).json({
                message: "Produto não encontrado!"
            });
            return;
        }

        // remover o produto do banco de dados
        await userRepository.remove(device);

        res.status(200).json({
            message: "Produto apagado com sucesso!"
        });


    }catch(error){
        res.status(500).json({
            message: "Erro ao visualizar produto"
        });
        return;
    }
})

export default router;