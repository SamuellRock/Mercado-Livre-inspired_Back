import express from "express"
import { PrismaClient } from "@prisma/client";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cors from "cors";
import path from "node:path";

const app = express()
const prisma = new PrismaClient()

// GET
// PUT / PATCH
// DELETE
// POST

// Middlewares
app.use(express.json());
app.use(cors());


/*

app.post('/produtos', (req , res) => {
    // Estudar Desestruturação de objeto no javascript
    
    const { body } = req 
    const { nome, imersao } = body 
    
    //nome de variavel body apenas para ser intuitivo
    // const body = req.body 
    // res.json({ nome: body.nome, imersao: body.imersao })
    
    
    res.json({ nome, imersao })
})

*/

app.get('/api/produtos', async (req , res) => {
  const todos = await prisma.produto.findMany();

  res.json(todos);
})


app.post('/api/produtos', async (req , res) => {
  const {
    titulo,
    preco,
    precoDesconto,
    precoParcelado,
    caracteristicas,
    imagens,
    estoque,
    freteGratis,
    full,
  } = req.body;


  try {
    const novo = await prisma.produto.create({
      data: {
        titulo,
        preco,
        precoDesconto,
        precoParcelado,
        caracteristicas: JSON.stringify(caracteristicas),
        imagens: JSON.stringify(imagens),
        estoque,
        freteGratis,
        full,
      },
    });
    res.json(novo);

  } catch (err) {
    res.status(400).json({ erro: "Erro ao criar o produto", detail: err });
  }
})




app.get('/api/produtos/:id', async (req , res) => {

    console.log("Produto GET ID")
})

app.put('/api/produtos/:id', async (req , res) => {

    console.log("Produto PUT")
})

app.delete('/api/produtos/:id', async (req , res) => {

    console.log("Produto DELETE")
})






app.listen(3000, () => {
    console.log(`Servidor está rodando em http://localhost:3000`)
})
