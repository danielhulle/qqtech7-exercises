const pool = require('../../config/db');

const getAllProfiles = async () => {
  const query = `
        SELECT * FROM beaba_testes.Profile;
    `;

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (err) {
    console.error('Erro ao consultar perfis', err);
    throw err;
  }
};

const getProfileById = async (id) => {
  const query = `
        SELECT * FROM beaba_testes.Profile
            WHERE id = $1
    `;

  try {
    const result = await pool.query(query, [id]);
    return result.rows[0];
  } catch (err) {
    console.error(`Erro ao consultar perfil com id ${id}`, err);
    throw err;
  }
};

const insertProfile = async (name) => {
  const query = `
        INSERT INTO beaba_testes.Profile (profile_name)
            VALUES ($1)
            RETURNING *;
    `;

  try {
    const result = await pool.query(query, [name]);
    return result.rows[0];
  } catch (err) {
    console.error('Erro ao inserir perfil', err);
    throw err;
  }
};

const updateProfile = async (id, name) => {
  const query = `
        UPDATE beaba_testes.Profile
            SET profile_name = $2
            WHERE id = $1
            RETURNING *;
    `;

  const values = [id, name];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Erro ao editar perfil', err);
    throw err;
  }
};

const deleteProfile = async (id) => {
  const query = `
        DELETE FROM beaba_testes.Profile
            WHERE id = $1
            RETURNING *;
    `;

  try {
    const result = await pool.query(query, [id]);
    return result.rows[0];
  } catch (err) {
    console.error('Erro ao excluir perfil', err);
    throw err;
  }
};

module.exports = { getAllProfiles, getProfileById, insertProfile, updateProfile, deleteProfile };
