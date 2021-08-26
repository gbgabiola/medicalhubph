const cors = require('cors');
const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

const port = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(
    `Server is listening on port ${port} at http://localhost:${port}`
  );
});
