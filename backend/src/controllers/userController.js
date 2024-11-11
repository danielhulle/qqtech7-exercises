const userModel = require('../models/userModel');

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    if (users.length > 0) {
      res.status(200).json({ message: 'Consulta aos usuários realizada com sucesso', users });
    } else {
      res.status(404).json({ message: 'Nenhum usuário encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao consultar lojas', error: err.message });
  }
};

const getUserByRegistration = async (req, res) => {
  const { registration } = req.params;

  try {
    const user = await userModel.getUserByRegistration(registration);

    if (user) {
      res.status(200).json({ message: 'Usuário com sucesso', user });
    } else {
      res.status(404).json({ message: `Usuário com id ${id} não encontrado` });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao', error: err.message });
  }
};

const insertUser = async (req, res) => {
  const { name, registration, email, password, id_store, id_profile } = req.body;

  try {
    const newUser = await userModel.insertUser(name, registration, email, password, id_store, id_profile);

    res.status(201).json({ message: 'Usuário registrado com sucesso', user: newUser });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao cadastrar usuário', error: err.message });
  }
};

const updateUser = async (req, res) => {
  const { registration } = req.params;
  const { name, registration: newRegistration, email, password, id_store, id_profile } = req.body;

  try {
    const updatedUser = await userModel.updateUser(
      name,
      newRegistration,
      email,
      password,
      id_store,
      id_profile,
      registration
    );

    if (updatedUser) {
      res.status(200).json({ message: 'Usuário atualizado com sucesso', user: updatedUser });
    } else {
      res.status(404).json({ message: `Usuário com id ${id} não encontrado` });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar usuário', error: err.message });
  }
};

const deleteUser = async (req, res) => {
  const { registration } = req.params;

  const deletedUser = await userModel.deleteUser(registration);

  try {
    if (deletedUser) {
      res.status(200).json({ message: 'Usuário excluído com sucesso', user: deletedUser });
    } else {
      res.status(404).json({ message: `Usuário com id ${id} não encontrado` });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao excluir usuário', error: err.message });
  }
};

module.exports = { getAllUsers, getUserByRegistration, insertUser, updateUser, deleteUser };
