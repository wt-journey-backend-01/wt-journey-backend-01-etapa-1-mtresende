const express = require('express')
const path = require('path')

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

app.get('/sugestao', (req, res) => {
    const { nome, ingredientes } = req.query;

    if (!nome || !ingredientes) {
        return res.send('<h2>Dados incompletos</h2><a hfref="/">Voltar</a>');
    }

    res.send(`
        <h1>Obrigado pela sugestão, ${nome}!<h1>
        <p>Ingredientes sugeridos: ${ingredientes}</p>
        <a href="/">Voltar para o início</a>        
    `)
});

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'contato.html'));
});

app.post('/contato', (req, res) => {
    const { nome, email, assunto, mensagem } = req.body;

    if (!nome || !email || !assunto || !mensagem) {
        return res.send('<h2>Por favor, preencha todos os campos.</h2><a href="/contato">Voltar</a>');
    }

    res.send(`
        <h1>Mensagem recebida!</h1>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${assunto}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
        <a href="/">Voltar para o início</a>        
    `)
});

const fs = require('fs');

app.get('/api/lanches', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'data', 'lanches.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if(err) {
            return res.status(500).send('Erro ao ler o arquivo de lanches');
        }

        res.setHeader('Content-Type', 'applications/json');
        res.send(data);
    });
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor DevBurger rodando na porta: ${PORT}`);
});