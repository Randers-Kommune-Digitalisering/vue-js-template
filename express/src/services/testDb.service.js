const db = require('./db.service');
const helper = require('../utils/helper.util');

async function getAll(){
  const rows = await db.query(
    `SELECT * FROM opkald`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

module.exports = {
    getAll
}