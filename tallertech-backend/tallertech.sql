CREATE DATABASE IF NOT EXISTS tallertech CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE tallertech;

CREATE TABLE IF NOT EXISTS usuarios (
  id_usuario INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(120) NOT NULL,
  cedula VARCHAR(30) NOT NULL UNIQUE,
  correo VARCHAR(150) NOT NULL UNIQUE,
  telefono VARCHAR(30),
  direccion VARCHAR(255),
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS ordenes_reparacion (
  id_orden INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT NOT NULL,
  servicio VARCHAR(150) NOT NULL,
  tecnico VARCHAR(120),
  fecha_ingreso DATE,
  fecha_entrega DATE,
  estado VARCHAR(50) DEFAULT 'Pendiente',
  observaciones TEXT,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE
);
