import React from "react";

/**
 * Tabla que recibe usuarios y callbacks para acciones.
 * Props:
 * - users: array de usuarios
 * - onEdit(user)
 * - onDelete(userId)
 */
export default function UserList({ users = [], onEdit, onDelete }) {
  return (
    <table className="user-table" aria-label="Lista de usuarios">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Cédula</th>
          <th>Correo</th>
          <th>Teléfono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 && (
          <tr><td colSpan="6" style={{textAlign:"center"}}>No hay usuarios</td></tr>
        )}
        {users.map((u) => (
          <tr key={u.id_usuario}>
            <td>{u.id_usuario}</td>
            <td>{u.nombre}</td>
            <td>{u.cedula}</td>
            <td>{u.correo}</td>
            <td>{u.telefono}</td>
            <td>
              <button onClick={() => onEdit(u)}>Editar</button>
              <button className="danger" onClick={() => {
                if (confirm("¿Eliminar usuario?")) onDelete(u.id_usuario);
              }}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
