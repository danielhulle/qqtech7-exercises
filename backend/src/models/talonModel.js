const pool = require('../../config/db');

const getAllTalons = async () => {
  const query = 'SELECT * FROM beaba_testes.Talon';

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (err) {
    console.error('Erro ao consultar talões', err);
    throw err;
  }
};

const getTalonById = async (id) => {
  const query = `
        SELECT * FROM beaba_testes.Talon
            WHERE id = $1
    `;

  try {
    const result = await pool.query(query, [id]);
    return result.rows[0];
  } catch (err) {
    console.error(`Erro ao consultar talão com id ${id}`, err);
    throw err;
  }
};

const insertTalon = async (talonQtt, storeId) => {
  const query = `
        INSERT INTO beaba_testes.Talon(talon_quantity, id_store)
            VALUES ($1, $2)
            RETURNING *;
    `;

  const values = [talonQtt, storeId];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Erro ao registrar talão', err);
    throw err;
  }
};

const updateTalon = async (id, talonQtt, status, storeId) => {
  const query = `
        UPDATE beaba_testes.Talon
            SET talon_quantity = $2,
                status = $3,
                id_store = $4
            WHERE id = $1
            RETURNING *;
    `;

  const values = [id, talonQtt, status, storeId];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Erro ao editar talão', err);
    throw err;
  }
};

const deleteTalon = async (id) => {
  const query = `
        DELETE FROM beaba_testes.Talon
            WHERE id = $1
            RETURNING *;
    `;

  try {
    const result = await pool.query(query, [id]);
    return result.rows[0];
  } catch (err) {
    console.error('Erro ao excluir talão', err);
    throw err;
  }
};

module.exports = { getAllTalons, getTalonById, insertTalon, updateTalon, deleteTalon };
