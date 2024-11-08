const pool = require('../../config/db');

const getAllStores = async () => {
  const query = 'SELECT * FROM beaba_testes.Store';

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (err) {
    console.error('Erro ao consultar lojas', err);
    throw err;
  }
};

const getStoreByCode = async (code) => {
  const query = `
    SELECT * FROM beaba_testes.Store
      WHERE code = $1
  `;

  try {
    const result = await pool.query(query, [code]);
    return result.rows;
  } catch (err) {
    console.error(`Erro ao consultar loja com código ${code}`, err);
    throw err;
  }
};

const insertStore = async (code, storeName, employeesQtt) => {
  const query = `
        INSERT INTO beaba_testes.Store(code, store_name, employees_quantity)
            VALUES ($1, $2, $3)
            RETURNING *
    `;

  const values = [code, storeName, employeesQtt];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Erro ao inserir loja', err);
    throw err;
  }
};

const updateStore = async (code, newCode, storeName, employeesQtt) => {
  const query = `
    UPDATE beaba_testes.Store
      SET code = COALESCE($2, $1),
          store_name = $3,
          employees_quantity = $4
      WHERE code = $1
      RETURNING *;
  `;

  const values = [code, newCode, storeName, employeesQtt];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Erro ao editar loja', err);
    throw err;
  }
};

const deleteStore = async (code) => {
  const query = `
    DELETE FROM beaba_testes.Store
      WHERE code = $1
      RETURNING *;
  `;

  try {
    const result = await pool.query(query, [code]);
    return result.rows[0];
  } catch (err) {
    console.error('Erro ao excluir loja', err);
    throw err;
  }
};

module.exports = { getAllStores, getStoreByCode, insertStore, updateStore, deleteStore };
