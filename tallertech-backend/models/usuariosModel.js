const { pool } = require('../db/connection');

const UsuariosModel = {
  async getAll() {
    const [rows] = await pool.query('SELECT * FROM usuarios');
    return rows;
  },

  async getById(id) {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE id_usuario = ?', [id]);
    return rows[0];
  },

  async create(user) {
    const [result] = await pool.query(
      'INSERT INTO usuarios (nombre, cedula, correo, telefono, direccion) VALUES (?, ?, ?, ?, ?)',
      [user.nombre, user.cedula, user.correo, user.telefono, user.direccion]
    );
    return { id: result.insertId };
  },

  async update(id, data) {
    const [result] = await pool.query('UPDATE usuarios SET ? WHERE id_usuario = ?', [data, id]);
    return result.affectedRows > 0;
  },

  async remove(id) {
    const [result] = await pool.query('DELETE FROM usuarios WHERE id_usuario = ?', [id]);
    return result.affectedRows > 0;
  }
};

module.exports = UsuariosModel;
