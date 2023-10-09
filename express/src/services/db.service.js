const mysql = require('mysql2/promise');
const dbConfig = require('../configs/db.config');

async function query(sql, params) {
  const connection = await mysql.createConnection(dbConfig);
  const [results, ] = await connection.execute(sql, params);

  return results;
}

async function createTable() {
  const sql = `CREATE TABLE IF NOT EXISTS opkald (id CHAR(36) NOT NULL, enhed TINYTEXT, besvaret TINYINT(1), tidspunkt TIMESTAMP, varighed INT UNSIGNED, fra ENUM('borger', 'medarbejder'), til ENUM('borger', 'medarbejder'), PRIMARY KEY (id))`;

  const connection = await mysql.createConnection(dbConfig);
  const [results, ] = await connection.execute(sql);

  return results;
}

module.exports = {
  query,
  createTable
}