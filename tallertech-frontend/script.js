const API_URL = "http://localhost:3000/api/usuarios"; // Ajusta al endpoint de tu backend

// Obtener usuarios al cargar
document.addEventListener("DOMContentLoaded", () => {
  loadUsers();
});

// Cargar usuarios en la tabla
async function loadUsers() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    const tbody = document.querySelector("#userTable tbody");
    tbody.innerHTML = "";
    data.forEach(u => {
      const row = `
        <tr>
          <td>${u.id_usuario}</td>
          <td>${u.nombre}</td>
          <td>${u.cedula}</td>
          <td>${u.correo}</td>
          <td>${u.telefono}</td>
          <td>${u.direccion}</td>
        </tr>`;
      tbody.insertAdjacentHTML("beforeend", row);
    });
  } catch (err) {
    console.error("Error cargando usuarios:", err);
  }
}

// Manejar envío del formulario
document.querySelector("#userForm").addEventListener("submit", async e => {
  e.preventDefault();

  const usuario = {
    nombre: document.querySelector("#nombre").value,
    cedula: document.querySelector("#cedula").value,
    correo: document.querySelector("#correo").value,
    telefono: document.querySelector("#telefono").value,
    direccion: document.querySelector("#direccion").value,
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario)
    });

    if (res.ok) {
      alert("Usuario registrado correctamente");
      e.target.reset();
      loadUsers();
    } else {
      alert("Error al registrar usuario");
    }
  } catch (err) {
    console.error("Error al enviar datos:", err);
  }
});
