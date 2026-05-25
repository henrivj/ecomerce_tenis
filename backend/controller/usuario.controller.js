const Usuario = require('../models/Usuario');

const cadastrar = async (req, res) => {
	const valores = req.body;

	if (!valores.nome || !valores.email || !valores.senha) return res.status(400).json({ message: 'Todos os campos devem ser preenchidos' });

	try {
		await Usuario.create(valores);
		res.status(201).json({ message: 'Usuario cadastrado com sucesso' });
	} catch (error) {
		console.error('Nao foi possivel cadastrar o usuario: ', error);
		res.status(500).json({ message: 'Nao foi possivel cadastrar o usuario' });
	}
};

const listar = async (req, res) => {
	try {
		const usuarios = await Usuario.findAll();
		res.status(200).json(usuarios);
	} catch (error) {
		console.error('Nao foi possivel listar os usuarios: ', error);
		res.status(500).json({ message: 'Nao foi possivel listar os usuarios' });
	}
};

const consultarId = async (req, res) => {
	try {
		const usuario = await Usuario.findByPk(req.params.id);

		if (!usuario) return res.status(404).json({ message: 'Usuario nao encontrado' });

		res.status(200).json(usuario);
	} catch (error) {
		console.error('Nao foi possivel consultar o usuario: ', error);
		res.status(500).json({ message: 'Nao foi possivel consultar o usuario' });
	}
};

const consultarNome = async (req, res) => {
	try {
		const usuario = await Usuario.findOne({ where: { nome: req.params.nome } });

		if (!usuario) return res.status(404).json({ message: 'Usuario nao encontrado' });

		res.status(200).json(usuario);
	} catch (error) {
		console.error('Nao foi possivel consultar o usuario: ', error);
		res.status(500).json({ message: 'Nao foi possivel consultar o usuario' });
	}
};

const atualizar = async (req, res) => {
	try {
		const usuario = await Usuario.findByPk(req.params.id);

		if (!usuario) return res.status(404).json({ message: 'Usuario nao encontrado' });

		await usuario.update(req.body);
		res.status(200).json(usuario);
	} catch (error) {
		console.error('Nao foi possivel atualizar o usuario: ', error);
		res.status(500).json({ message: 'Nao foi possivel atualizar o usuario' });
	}
};

const deletar = async (req, res) => {
	try {
		const usuario = await Usuario.findByPk(req.params.id);

		if (!usuario) return res.status(404).json({ message: 'Usuario nao encontrado' });

		await usuario.destroy();
		res.status(200).json({ message: 'Usuario deletado com sucesso' });
	} catch (error) {
		console.error('Nao foi possivel deletar o usuario: ', error);
		res.status(500).json({ message: 'Nao foi possivel deletar o usuario' });
	}
};

module.exports = { cadastrar, listar, consultarId, consultarNome, atualizar, deletar };
