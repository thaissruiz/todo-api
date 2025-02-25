require('dotenv').config(); // Para configurar variaveis do ambiente
const express = require('express'); // Framework para criar a API
const mongoose = require('mongoose'); // Para conectar ao Mongo DB
const cors = require('cors'); // Para permitir comunicavao entre frontend e backend 


const app = express();

// Middlewares
app.use(express.json()); // Permitir JSON no corpo das requisições
app.use(cors()); // Permitir requisições do frontend

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB conectado!"))
  .catch(err => console.error("Erro ao conectar:", err));

//Importar as rotas
  const todoRoutes = require('./routes/todoRoutes');
  app.use('/api', todoRoutes);
  

// Rotas básicas
app.get('/', (req, res) => res.send('API Todo List rodando!'));

// Porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
