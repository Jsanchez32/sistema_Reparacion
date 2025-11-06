import React, { useState, useEffect } from "react";

/**
 * Formulario controlado para crear/editar usuarios.
 * Props:
 * - onSubmit(userObj) -> función para enviar los datos al contenedor
 * - initialData -> objeto para edición (opcional)
 */
export default function UserForm({ onSubmit, initialData, onCancel }) {
  const [form, setForm] = useState({
    nombre: "",
    cedula: "",
    correo: "",
    telefono: "",
    direccion: ""
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const submit = (e) => {
    e.preventDefault();
    // validaciones básicas
    if (!form.nombre || !form.cedula) {
      alert("Nombre y cédula son requeridos.");
      return;
    }
    onSubmit(form);
    // no limpiar aquí si es edición; contenedor decide
  };

  return (
    <form className="user-form" onSubmit={submit}>
      <label>Nombre
        <input name="nombre" value={form.nombre} onChange={handleChange} required />
      </label>
      <label>Cédula
        <input name="cedula" value={form.cedula} onChange={handleChange} required />
      </label>
      <label>Correo
        <input name="correo" value={form.correo} onChange={handleChange} type="email" />
      </label>
      <label>Teléfono
        <input name="telefono" value={form.telefono} onChange={handleChange} />
      </label>
      <label>Dirección
        <input name="direccion" value={form.direccion} onChange={handleChange} />
      </label>
      <div className="form-actions">
        <button type="submit">Guardar</button>
        {onCancel && <button type="button" className="btn-secondary" onClick={onCancel}>Cancelar</button>}
      </div>
    </form>
  );
}
