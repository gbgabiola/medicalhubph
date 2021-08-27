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

app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/register', (req,res)=>{
  const username= req.body.username;
  const password= req.body.password;

  db.query('INSERT INTO patientSignUp (username, password) VALUES (?, ?)', [username, password],
  (error, result)=>{
    if(error){
      console.log(error);
    }
    else
    {
      res.send('Successfully registered!')
    }
  }
  );
});


app.listen(port, () => {
  console.log(
    `Server is listening on port ${port} at http://localhost:${port}`
  );
});
