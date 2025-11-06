const OrdenesModel = require('../models/ordenesModel');

const OrdenesController = {
  async getAll(req, res) {
    try {
      const ordenes = await OrdenesModel.getAll();
      res.json(ordenes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const result = await OrdenesModel.create(req.body);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

module.exports = OrdenesController;
