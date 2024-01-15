const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 5432;

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'your_database',
  password: '2003',
  port: 5432,
});

app.get('/api/data', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM your_table');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
