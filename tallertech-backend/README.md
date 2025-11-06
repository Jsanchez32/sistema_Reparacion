# TallerTech - Backend (Node.js + MySQL)

**Proyecto:** TallerTech - Sistema de reparación de computadores  
**Autor:** Juan sanchez  
**Evidencia:** GA7-220501096-AA2-EV01

## Requisitos
- Node.js v14+ (recomendado v18+)
- MySQL Server
- npm

## Instalación
1. Clonar el repositorio o copiar esta carpeta.
2. Instalar dependencias:
   npm install
3. Crear archivo .env (usar .env.example) y ajustar credenciales.
4. Crear la base de datos y tablas usando `tallertech.sql`.
5. Iniciar la aplicación:
   npm run dev
6. Probar endpoints:
   - GET http://localhost:3000/api/usuarios
   - POST http://localhost:3000/api/usuarios
   - GET http://localhost:3000/api/ordenes
   - POST http://localhost:3000/api/ordenes

## Estructura
- server.js - punto de entrada
- db/connection.js - conexión a MySQL (mysql2/promise)
- models/ - lógica de acceso a datos
- controllers/ - controladores
- routes/ - rutas express

