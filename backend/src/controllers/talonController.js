const talonModel = require('../models/talonModel');

const getAllTalons = async (req, res) => {
  try {
    const talons = await talonModel.getAllTalons();

    if (talons) {
      res.status(200).json({ message: 'Consulta aos talões realizada com sucesso!', talons });
    } else {
      res.status(404).json({ message: `Talão com id ${id} não encontrado` });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao consultar talões', error: err.message });
  }
};

const getTalonById = async (req, res) => {
  const { id } = req.params;

  try {
    const talon = await talonModel.getTalonById(id);

    if (talon) {
      res.status(200).json({ message: 'Consulta ao talão realizada com sucesso!', talon });
    } else {
      res.status(404).json({ message: `Talão com id ${id} não encontrado` });
    }
  } catch (err) {
    res.status(500).json({ message: `Erro ao consultar talão com id ${id}`, error: err.message });
  }
};

const insertTalon = async (req, res) => {
  const { talon_quantity, id_store } = req.body;

  try {
    const newTalon = await talonModel.insertTalon(talon_quantity, id_store);

    if (newTalon) {
      res.status(200).json({ message: 'Talão registrado com sucesso!', talon: newTalon });
    } else {
      res.status(404).json({ message: `Talão com id ${id} não encontrado` });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao registrar talão', error: err.message });
  }
};

const updateTalon = async (req, res) => {
  const { id } = req.params;
  const { talon_quantity, status, id_store } = req.body;

  try {
    const updatedTalon = await talonModel.updateTalon(id, talon_quantity, status, id_store);

    if (updatedTalon) {
      res.status(200).json({ message: 'Talão atualizado com sucesso!', talon: updatedTalon });
    } else {
      res.status(404).json({ message: `Talão com id ${id} não encontrado` });
    }
  } catch (err) {
    res.status(500).json({ message: `Erro ao atualizar talão com id ${id}`, error: err.message });
  }
};

const deleteTalon = async (req, res) => {
  const { id } = req.params;

  try {
    const talon = await talonModel.deleteTalon(id);

    if (talon) {
      res.status(200).json({ message: 'Talão excluído com sucesso!', talon: talon });
    } else {
      res.status(404).json({ message: `Talão com id ${id} não encontrado` });
    }
  } catch (err) {
    res.status(500).json({ message: `Erro ao excluir talão com id ${id}`, error: err.message });
  }
};

module.exports = { getAllTalons, getTalonById, insertTalon, updateTalon, deleteTalon };
