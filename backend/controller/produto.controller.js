const Produto = require('../models/Produto');

const cadastrar = async (req, res) => {
	const valores = req.body;

	if (!valores.nome || !valores.categoria || !valores.tamanho || !valores.quantidade || !valores.preco) return res.status(400).json({ message: 'Todos os campos devem ser preenchidos' });

	try {
		await Produto.create(valores);
		res.status(201).json({ message: 'Produto cadastrado com sucesso' });
	} catch (error) {
		console.error('Nao foi possivel cadastrar o produto: ', error);
		res.status(500).json({ message: 'Nao foi possivel cadastrar o produto' });
	}
};

const listar = async (req, res) => {
	try {
		const produtos = await Produto.findAll();
		res.status(200).json(produtos);
	} catch (error) {
		console.error('Nao foi possivel listar os produtos: ', error);
		res.status(500).json({ message: 'Nao foi possivel listar os produtos' });
	}
};

const consultarId = async (req, res) => {
	try {
		const produto = await Produto.findByPk(req.params.id);

		if (!produto) return res.status(404).json({ message: 'Produto nao encontrado' });

		res.status(200).json(produto);
	} catch (error) {
		console.error('Nao foi possivel consultar o produto: ', error);
		res.status(500).json({ message: 'Nao foi possivel consultar o produto' });
	}
};

const consultarNome = async (req, res) => {
	try {
		const produto = await Produto.findOne({ where: { nome: req.params.nome } });

		if (!produto) return res.status(404).json({ message: 'Produto nao encontrado' });

		res.status(200).json(produto);
	} catch (error) {
		console.error('Nao foi possivel consultar o produto: ', error);
		res.status(500).json({ message: 'Nao foi possivel consultar o produto' });
	}
};

const atualizar = async (req, res) => {
	try {
		const produto = await Produto.findByPk(req.params.id);

		if (!produto) return res.status(404).json({ message: 'Produto nao encontrado' });

		await produto.update(req.body);
		res.status(200).json(produto);
	} catch (error) {
		console.error('Nao foi possivel atualizar o produto: ', error);
		res.status(500).json({ message: 'Nao foi possivel atualizar o produto' });
	}
};

const deletar = async (req, res) => {
	try {
		const produto = await Produto.findByPk(req.params.id);

		if (!produto) return res.status(404).json({ message: 'Produto nao encontrado' });

		await produto.destroy();
		res.status(200).json({ message: 'Produto deletado com sucesso' });
	} catch (error) {
		console.error('Nao foi possivel deletar o produto: ', error);
		res.status(500).json({ message: 'Nao foi possivel deletar o produto' });
	}
};

module.exports = { cadastrar, listar, consultarId, consultarNome, atualizar, deletar };
