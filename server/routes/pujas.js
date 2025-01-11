const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all pujas
router.get('/pujas', async (req, res) => {
  try {
    const allPujas = await pool.query('SELECT * FROM pujas');
    res.json(allPujas.rows);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router; 