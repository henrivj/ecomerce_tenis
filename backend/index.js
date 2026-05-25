const express = require('express');
const cors = require('cors');
const db = require('./db/conn');

const usuarioController = require('./controller/usuario.controller');
const produtoController = require('./controller/produto.controller');

const port = 3000;
const host = 'localhost';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post('/usuario', usuarioController.cadastrar);
app.get('/usuarios', usuarioController.listar);
app.get('/usuario/:id', usuarioController.consultarId);
app.get('/usuario/nome/:nome', usuarioController.consultarNome);
app.put('/usuario/:id', usuarioController.atualizar);
app.delete('/usuario/:id', usuarioController.deletar);

app.post('/produto', produtoController.cadastrar);
app.get('/produtos', produtoController.listar);
app.get('/produto/:id', produtoController.consultarId);
app.get('/produto/nome/:nome', produtoController.consultarNome);

app.put('/produto/:id', produtoController.atualizar);
app.delete('/produto/:id', produtoController.deletar);

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Aplicacao rodando' });
});

db.sync()
	.then(() => {
		app.listen(port, host, () => {
			console.log(`Banco sincronizado e rodando em: http://${host}:${port}`);
		});
	})
	.catch((error) => {
		console.error('Erro ao sincronizar o banco de dados: ', error);
	});
