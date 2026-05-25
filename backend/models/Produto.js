const { DataTypes } = require('sequelize');
const db = require('../db/conn');

const Produto = db.define(
	'produto',
	{
		idProduto: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		nome: {
			type: DataTypes.STRING,
			allowNull: false
		},
		categoria: {
			type: DataTypes.STRING,
			allowNull: false
		},
		numero: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		tamanho: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		quantidade: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		preco: {
			type: DataTypes.DECIMAL(10, 2), // .00
			allowNull: false
		}
	},
	{
		timestamps: false,
		tableName: 'produtos'
	}
);

module.exports = Produto;
