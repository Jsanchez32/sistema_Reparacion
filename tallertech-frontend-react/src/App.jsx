import React from "react";
import Navbar from "./components/Navbar";
import UsersPage from "./pages/UsersPage";

/**
 * Componente raíz de la aplicación.
 * Aquí puedes agregar rutas si usas react-router en el futuro.
 */
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <UsersPage />
      </main>
    </div>
  );
}
