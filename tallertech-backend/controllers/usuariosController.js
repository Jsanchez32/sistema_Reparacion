const UsuariosModel = require('../models/usuariosModel');

const UsuariosController = {
  async getAll(req, res) {
    try {
      const data = await UsuariosModel.getAll();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const user = await UsuariosModel.getById(req.params.id);
      if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const newUser = await UsuariosModel.create(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const updated = await UsuariosModel.update(req.params.id, req.body);
      res.json({ updated });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      const deleted = await UsuariosModel.remove(req.params.id);
      res.json({ deleted });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

module.exports = UsuariosController;
