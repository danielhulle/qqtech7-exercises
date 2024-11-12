const pool = require('../../config/db');

const getAllInfo = async () => {
  const query = `
          SELECT * FROM beaba_testes.Talon t
              INNER JOIN beaba_teste.Dispatchs d
              ON t.id = d.id_talon
              INNER JOIN beaba_testes.Receipt r
              ON t.id = r.id_talon
      `;

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (err) {
    console.error('Erro ao consultar infomações de ');
  }
};
