const storeModel = require('../models/storeModel');

const getAllStores = async (req, res) => {
  try {
    const stores = await storeModel.getAllStores();

    if (stores.length > 0) {
      res.status(200).json({ message: 'Consulta as lojas realizada com sucesso!', stores });
    } else {
      res.status(404).json({ message: 'Nenhuma loja encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao consultar lojas', error: err.message });
  }
};

const getStoreByCode = async (req, res) => {
  const { code } = req.params;

  try {
    const store = await storeModel.getStoreByCode(code);

    if (store) {
      res.status(200).json({ message: `Consulta a loja ${code} realizada com sucesso!`, store });
    } else {
      res.status(404).json({ message: `Loja com código ${code} não encontrada` });
    }
  } catch (err) {
    res.status(500).json({ message: `Erro ao consultar loja com código ${code}`, error: err.message });
  }
};

const insertStore = async (req, res) => {
  const { code, storeName, employeesQtt } = req.body;

  try {
    const newStore = await storeModel.insertStore(code, storeName, employeesQtt);

    res.status(201).json({ message: 'Loja registrada com sucesso!', store: newStore });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar loja', error: err.message });
  }
};

const updateStore = async (req, res) => {
  const { code } = req.params;
  const { code: newCode, store_name, employees_quantity } = req.body;

  try {
    const updatedStore = await storeModel.updateStore(code, newCode, store_name, employees_quantity);

    if (updatedStore) {
      res.status(200).json({ message: 'Loja atualizada com sucesso!', store: updatedStore });
    } else {
      res.status(404).json({ message: `Loja com código ${code} não encontrada` });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar loja', error: err.message });
  }
};

const deleteStore = async (req, res) => {
  const { code } = req.params;

  try {
    const deletedStore = await storeModel.deleteStore(code);

    if (deletedStore) {
      res.status(200).json({ message: 'Loja excluída com sucesso', store: deletedStore });
    } else {
      res.status(404).json({ message: `Loja com código ${code} não encontrada` });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao excluir loja', error: err.message });
  }
};

module.exports = { getAllStores, getStoreByCode, insertStore, updateStore, deleteStore };
