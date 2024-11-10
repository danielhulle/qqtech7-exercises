const profileModel = require('../models/profileModel');

const getAllProfiles = async (req, res) => {
  try {
    const profiles = await profileModel.getAllProfiles();

    if (profiles.length > 0) {
      res.status(200).json({ message: 'Consulta aos perfis realizada com sucesso!', profiles });
    } else {
      res.status(404).json({ message: 'Nenhum perfil encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao consultar usuários', error: err.message });
  }
};
const getProfileById = async (req, res) => {
  const { id } = req.params;

  try {
    const profile = await profileModel.getProfileById(id);

    if (profile) {
      res.status(200).json({ message: 'Consulta ao perfil realizada com sucesso!', profile });
    } else {
      res.status(404).json({ message: `Perfil com id ${id} não encontrado` });
    }
  } catch (err) {
    res.status(500).json({ message: `Erro ao consultar usuário com id ${id}`, error: err.message });
  }
};
const insertProfile = async (req, res) => {
  const { profile_name } = req.body;

  try {
    const newProfile = await profileModel.insertProfile(profile_name);

    res.status(200).json({ message: 'Perfil cadastrado com sucesso!', profile: newProfile });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar perfil', error: err.message });
  }
};
const updateProfile = async (req, res) => {
  const { id } = req.params;
  const { profile_name } = req.body;

  try {
    const updatedProfile = await profileModel.updateProfile(id, profile_name);

    if (updateProfile) {
      res.status(200).json({ message: 'Perfil atualizado com sucesso!', profile: updatedProfile });
    } else {
      res.status(404).json({ message: `Perfil com id ${id} não encontrado` });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar perfil', error: err.message });
  }
};
const deleteProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProfile = await profileModel.deleteProfile(id);

    if (deletedProfile) {
      res.status(200).json({ message: 'Perfil excluído com sucesso!', profile: deletedProfile });
    } else {
      res.status(404).json({ message: `Perfil com id ${id} não encontrado` });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao excluir perfil', error: err.message });
  }
};

module.exports = { getAllProfiles, getProfileById, insertProfile, updateProfile, deleteProfile };
