"use strict";

const database = require("../infrastructure/database");

async function createUser(
  nombreUsuario,
  nombre,
  apellido,
  email,
  passwordHash,
  role
) {
  const pool = await database.getPool();
  const insertQuery =
    "INSERT INTO usuario (nombre_usuario, nombre, apellido, email, contrasena, rol) VALUES(?, ?, ?, ?, ?, ?)";
  const [created] = await pool.query(insertQuery, [
    nombreUsuario,
    nombre,
    apellido,
    email,
    passwordHash,
    role,
  ]);

  return created.insertId;
}

module.exports = { createUser };