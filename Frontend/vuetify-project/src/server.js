const express = require('express')
const cors = require('cors')
const mysql = requrire('mysql2');

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

// conexão com o banco mysql
const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '986715',
   database: 'devices_db'
})

db.connect(err => {
   if(err) {
      console.error('Erro na conexão com o banco', err)
   } else {
      console.log('Conectado ao MySQL')
   }
})

// Rota para adicionar um dispositivo