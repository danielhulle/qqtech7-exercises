const pool = require('../../config/db');

const getAllUsers = async () => {
  const query = `
    SELECT * FROM beaba_testes.Users u
      INNER JOIN beaba_testes.Profile p
      ON u.id_profile = p.id;
    `;

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (err) {
    console.error('Erro ao consultar usuários', err);
    throw err;
  }
};

const getUserByRegistration = async (registration) => {
  const query = `
    SELECT * FROM beaba_testes.Users
        WHERE registration = $1
  `;

  try {
    const result = await pool.query(query, [registration]);
    return result.rows[0];
  } catch (err) {
    console.error('Erro ao consultar usuários', err);
    throw err;
  }
};

const insertUser = async (name, registration, email, password, storeId, profileId) => {
  const query = `
        INSERT INTO beaba_testes.Users(name, registration, email, password, id_store, id_profile)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;
    `;

  const values = [name, registration, email, password, storeId, profileId];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Erro ao registrar usuário', err);
    throw err;
  }
};

const updateUser = async (name, newRegistration, email, password, storeId, profileId, registration) => {
  const query = `
    UPDATE beaba_testes.Users
        SET name = $1, 
            registration = COALESCE($2, $7),
            email = $3, 
            password = $4, 
            id_store = $5, 
            id_profile = $6
        WHERE registration = $7
        RETURNING *;
    `;

  const values = [name, newRegistration, email, password, storeId, profileId, registration];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Erro ao editar usuário', err);
    throw err;
  }
};

const deleteUser = async (registration) => {
  const query = `
    DELETE FROM beaba_testes.Users
        WHERE registration = $1
        RETURNING *;
    `;

  try {
    const result = await pool.query(query, [registration]);
    return result.rows[0];
  } catch (err) {
    console.error('Erro ao excluir usuário', err);
    throw err;
  }
};

module.exports = { getAllUsers, getUserByRegistration, insertUser, updateUser, deleteUser };
