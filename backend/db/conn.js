const { Sequelize } = require('sequelize')

const db = new Sequelize('ecomerce_tenis', 'root', 'senai', {
    dialect: 'mysql',
    port: '3306',
    hostname: 'localhost'
})

module.exports = db