# Mercado-Livre-inspired_Back
Projeto inspirado no mercado livre para recria logica do backend - Repositório do Back-end


# 🛒 Mercado Livre Inspired API

Este é um projeto backend inspirado no Mercado Livre, desenvolvido com **Node.js**, **Express** e **Prisma ORM**, usando banco de dados **SQLite**.

## 🚀 Tecnologias usadas

- Node.js
- Express
- Prisma ORM
- SQLite
- CORS
- dotenv

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node)

---

## 🧭 Instruções para rodar o projeto em uma nova máquina

Clone o projeto e instale as dependências:

```bash
# 1. Clonar o repositório
git clone o repositorio do backend

# 2. Instalar as dependências
npm install

# 3. Criar o arquivo .env (copiar do .env.example se tiver variáveis de ambiente)
cp .env.example .env

# 4. Gerar o Prisma Client
npx prisma generate

# 5. Rodar o projeto
npm run start

