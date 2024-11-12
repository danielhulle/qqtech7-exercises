const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'beaba_testes',
  password: 'postgres',
  port: 5432,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Erro ao conectar ao banco de dados!', err.stack);
  }

  console.log('Conexão ao banco de dados foi estabelecida com sucesso!');
  release();
});

module.exports = pool;
