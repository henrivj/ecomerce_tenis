const { DataTypes } = require('sequelize');
const db = require('../db/conn');

const Movimento = db.define(
	'movimento',
	{
		idMovimento: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		idUsuario: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'usuarios',
				key: 'idUsuario'
			}
		},
		idProduto: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'produtos',
				key: 'idProduto'
			}
		},
		tipo: {
			type: DataTypes.ENUM('ENTRADA', 'SAIDA'),
			allowNull: false
		},
		custo: {
			type: DataTypes.DECIMAL(10, 2), // .00
			allowNull: false
		},
		data: {
			type: DataTypes.DATEONLY,
			allowNull: false
		}
	},
	{
		timestamps: false,
		tableName: 'movimentos'
	}
);

module.exports = Movimento;
