const { pool } = require('../db/connection');

const OrdenesModel = {
  async getAll() {
    const [rows] = await pool.query('SELECT * FROM ordenes_reparacion');
    return rows;
  },

  async create(data) {
    const [result] = await pool.query(
      'INSERT INTO ordenes_reparacion (id_usuario, servicio, tecnico, fecha_ingreso, fecha_entrega, estado, observaciones) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [data.id_usuario, data.servicio, data.tecnico, data.fecha_ingreso || null, data.fecha_entrega || null, data.estado || 'Pendiente', data.observaciones || null]
    );
    return { id: result.insertId };
  }
};

module.exports = OrdenesModel;
