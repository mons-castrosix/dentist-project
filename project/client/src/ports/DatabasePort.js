
const express = require('express')
const app = express()
const multer = require('multer')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')
const { response } = require('express')
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'dentista'
  })



    app.post('/paciente-add', (req, res) => {
        const nombre=req.body.nombre.name
        const email=req.body.nombre.email
        const sql="INSERT INTO paciente(nombres,correo_electronico) VALUES('"+nombre+"','"+email+"')";
        db.query(sql, (err, result) => {
            if (err) {
            console.log(err)

            }
            else {
            console.log(result)
            res.send(result)

            }


        });

    });
    
    app.get('/pacientes', (req, res) => {
        db.query("SELECT id,CONCAT(nombres,' ',apaterno,' ',amaterno),edad,genero,num_contacto FROM paciente; ", (err, result) => {
          if (err) {
            console.log(err)
          }
          else {
            console.log(result)

            
            res.send(result)
      
      
          }
        })
      })

app.listen(3001,()=>{
console.log("escuchando en puero 3001")
})