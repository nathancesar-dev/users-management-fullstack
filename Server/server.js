import express from 'express';
import { PrismaClient } from '@prisma/client'
import cors from 'cors';

const prisma = new PrismaClient();


const app = express();
app.use(express.json())
app.use(cors())



app.get('/usuario', async (req, res) => {

    const users = await prisma.user.findMany()

    res.status(200).json(users)
})

app.post('/usuario', async (req, res) => {

    console.log("Dados recebidos:", req.body);
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    });
    res.status(201).json(user);

});

app.put('/usuario/:id', async (req, res) => {

    console.log("Dados recebidos:", req.body);
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    });
    res.status(201).json(user);

});

app.delete('/usuario/:id', async (req, res) => {

    const user = await prisma.user.delete({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({ message: `Usuário ${req.params.id} deletado com sucesso` });
})     

app.listen(3000, (req, res) => {
    console.log("Servidor rodando na porta 3000")
})                  