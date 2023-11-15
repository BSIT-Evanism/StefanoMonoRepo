const mysql = require('mysql');
const express = require('express')
const cors = require('cors')

const port = 3000

const app = express()

app.use(cors())

const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '392002',
            database: 'seoul'
        })

connection.connect();

app.get('/users', (req, res) => {
      connection.query('SELECT * FROM users', (error, results, fields) => {
            if (error) throw error;
            res.json(results);
          });
  })


app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })

