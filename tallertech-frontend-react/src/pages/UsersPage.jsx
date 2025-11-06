import React, { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import Modal from "../components/Modal";
import Loader from "../components/Loader";
import { getUsers, createUser, updateUser, deleteUser } from "../api/api";

/**
 * Página principal de usuarios: coordina la vista y las llamadas al backend.
 * Incluye manejo de estado y pruebas de errores.
 */
export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const res = await getUsers();
      // backend debe devolver JSON con array en res.data
      setUsers(res.data || []);
    } catch (err) {
      console.error("Error cargando usuarios:", err);
      alert("No se pudo cargar la lista de usuarios.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  const handleCreate = async (user) => {
    try {
      await createUser(user);
      setShowFormModal(false);
      load();
    } catch (err) {
      console.error(err);
      alert("Error creando usuario.");
    }
  };

  const handleEdit = (user) => {
    setEditing(user);
    setShowFormModal(true);
  };

  const handleUpdate = async (user) => {
    try {
      await updateUser(user.id_usuario, user);
      setEditing(null);
      setShowFormModal(false);
      load();
    } catch (err) {
      console.error(err);
      alert("Error actualizando usuario.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      load();
    } catch (err) {
      console.error(err);
      alert("Error eliminando usuario.");
    }
  };

  return (
    <section id="usuarios" className="container">
      <h2>Usuarios</h2>
      <div className="toolbar">
        <button onClick={() => { setEditing(null); setShowFormModal(true); }}>Nuevo usuario</button>
        <button onClick={load}>Recargar</button>
      </div>

      {loading ? <Loader /> : <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />}

      <Modal visible={showFormModal} title={editing ? "Editar Usuario" : "Nuevo Usuario"} onClose={() => setShowFormModal(false)}>
        <UserForm
          initialData={editing || undefined}
          onSubmit={editing ? handleUpdate : handleCreate}
          onCancel={() => setShowFormModal(false)}
        />
      </Modal>
    </section>
  );
}
