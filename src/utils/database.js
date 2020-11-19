const { Client } = require('pg');

require('dotenv').config();

/**
 * Conectando o banco
 */
const client = new Client({
	connectionString: process.env.DATABASE_URL,
	host: process.env.DATABASE_HOST,
	port: process.env.DATABASE_PORT,
	password: process.env.DATABASE_PW,
	user: process.env.DATABASE_USER,
	database: process.env.DATABASE_NAME,
	ssl: {
		rejectUnauthorized: false,
	},
});

client
	.connect()
	.then(() => console.log('connected'))
	.catch((err) => console.error('connection error', err.stack));

module.exports = client;
