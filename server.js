require('dotenv').config(); //carrega as variáveis de ambiente do arquivo .env
const express = require('express');
const app = express();

// Rota ou endpoint 
                //request & response
app.get('/ping', (req, res) => {
    return res.json({message: 'pong' });
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
//  console.log(`Servidor rodando....na porta: http://localhost:3000`);
    console.log(`Servidor rodando....na porta: http://localhost:${PORT}`);
})