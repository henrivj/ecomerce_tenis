const db = require('./db/conn');
const { Usuario, Produto, Movimento } = require('./models/rel');

async function syncDatabase() {
	try {
		await db.sync({ force: true });
		console.log('Tabelas sincronizadas');
	} catch (error) {
		console.error('Erro ao sincronizar as tabelas: ', error);
	} finally {
		db.close();
		console.log('Conexao com o banco fechada');
	}
}

syncDatabase();
