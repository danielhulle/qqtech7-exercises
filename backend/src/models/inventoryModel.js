const pool = require('../../config/db');

const getAllInventories = async () => {
  const query = `
    SELECT * FROM beaba_testes.Inventory;
  `;

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (err) {
    console.error('Erro ao buscar estoques', err);
  }
};

const getInventoryById = async (id) => {
  const query = `
    SELECT * FROM beaba_testes.Inventory
      WHERE id = $1
  `;

  try {
    const result = await pool.query(query, [id]);
    return result.rows[0];
  } catch (err) {
    console.error(`Erro ao consultar inventário com id ${id}`, err);
    throw err;
  }
};

const insertInventory = async (minQtt, recomendedQtt, currentQtt, storeId) => {
  const query = `
        INSERT INTO beaba_testes.Inventory (min_quantity, recomended_quantity, current_quantity, id_store)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
    `;

  const values = [minQtt, recomendedQtt, currentQtt, storeId];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Erro ao inserir estoque', err);
    throw err;
  }
};

const updateInventory = async (id, minQtt, recomendedQtt, currentQtt, storeId) => {
  const query = `
    UPDATE beaba_testes.Inventory
      SET min_quantity = $2, 
        recomended_quantity = $3, 
        current_quantity = $4, 
        id_store = $5
      WHERE id = $1
      RETURNING *;
  `;

  const values = [id, minQtt, recomendedQtt, currentQtt, storeId];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Erro ao atualizar estoque', err);
    throw err;
  }
};

const deleteInventory = async (id) => {
  const query = `
    DELETE FROM beaba_testes.Inventory
    WHERE id = $1
    RETURNING *;
  `;

  try {
    const result = await pool.query(query, [id]);
    return result.rows[0];
  } catch (err) {
    console.error('Erro ao deletar estoque', err);
    throw err;
  }
};

module.exports = { getAllInventories, getInventoryById, insertInventory, updateInventory, deleteInventory };
