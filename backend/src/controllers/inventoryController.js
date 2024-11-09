const inventoryModel = require('../models/inventoryModel');

const getAllInventories = async (req, res) => {
  try {
    const inventories = await inventoryModel.getAllInventories();

    if (inventories.length > 0) {
      res.status(200).json({ message: 'Consulta aos estoques realizado com sucesso', inventories });
    } else {
      res.status(404).json({ message: 'Nenhum estoque foi encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao consultar estoques', error: err.message });
  }
};

const getInventoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const inventory = await inventoryModel.getInventoryById(id);

    if (inventory) {
      res.status(200).json({ message: 'Consulta ao inventário realizada com sucesso!', inventory });
    } else {
      res.status(404).json({ message: `Estoque com id ${id} não encontrado` });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao consultar estoque', error: err.message });
  }
};

const insertInventory = async (req, res) => {
  try {
    const { min_quantity, recomended_quantity, current_quantity, id_store } = req.body;

    const newinventory = await inventoryModel.insertInventory(
      min_quantity,
      recomended_quantity,
      current_quantity,
      id_store
    );

    res.status(201).json({ message: 'Estoque criado com sucesso', inventory: newinventory });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao cadastrar estoque', error: err.message });
  }
};

const updateInventory = async (req, res) => {
  try {
    const { id } = req.params;
    const { min_quantity, recomended_quantity, current_quantity, id_store } = req.body;

    const updatedinventory = await inventoryModel.updateInventory(
      id,
      min_quantity,
      recomended_quantity,
      current_quantity,
      id_store
    );

    if (updatedinventory) {
      res.status(200).json({ message: 'Estoque atualizado com sucesso', inventory: updatedinventory });
    } else {
      res.status(404).json({ message: 'Estoque não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar estoque', error: err.message });
  }
};

const deleteInventory = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedinventory = await inventoryModel.deleteInventory(id);

    if (deletedinventory) {
      res.status(200).json({ message: 'Estoque excluído com sucesso', inventory: deletedinventory });
    } else {
      res.status(404).json({ message: 'Estoque não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao excluir estoque', error: err.message });
  }
};

module.exports = { getAllInventories, getInventoryById, insertInventory, updateInventory, deleteInventory };
