const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;
const content = 'AAAAA';

// Configura o Express para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página "Sobre"
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Rota para simular um upload
app.post('/upload', (req, res) => {
    let fileData = '';
    req.on('data', chunk => {
        fileData += chunk.toString();
    });
    req.on('end', () => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Upload simulado com sucesso!');

        // Salva o conteúdo em um arquivo
        fs.writeFile('upload.txt', content, err => {
            if (err) {
                console.error(err);
            } else {
                console.log('Arquivo escrito com sucesso!');
            }
        });
    });
});

// Tratamento de erro 404
app.use((req, res) => {
    res.status(404).send('<h1>404 Não Encontrado</h1><p>A página que você está procurando não existe.</p>');
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

// Criar um arquivo ao iniciar o servidor
fs.writeFile('message.txt', 'Olá, mundo!', function (err) {
    if (err) throw err;
    console.log('Arquivo criado!');
});

// Ler o arquivo ao iniciar o servidor
fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Dados do arquivo:', data);
});
