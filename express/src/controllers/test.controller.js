const testDb = require('../services/testDb.service');

async function getAll(req, res, next) {
  try {
      res.json(await testDb.getAll());
  } catch (err) {
      console.error(`Error while getting calls`, err.message);
  }
}

module.exports = {
  getAll
};