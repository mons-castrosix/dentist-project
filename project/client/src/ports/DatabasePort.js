
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

  app.get('/pacientes', (req, res) => {
    db.query("SELECT id,CONCAT(nombres,' ',apaterno,' ',amaterno) as nombre,edad,genero,telefono FROM paciente; ", (err, result) => {
      if (err) {
        console.log(err)
      }
      else {
        //console.log(result)

        
        res.send(result)
  
  
      }
    })
  })

    app.post('/paciente-add', (req, res) => {
        console.log(req.body);
        const nombre=req.body.nombres
        const apaterno=req.body.apaterno
        const amaterno= req.body.amaterno
        const genero=req.body.genero
        const telefono=req.body.telefono

        const edad=req.body.edad
        const email=req.body.email
        const sql="INSERT INTO paciente VALUES("+null+",'"+nombre+"','"+apaterno+"','"+amaterno+"',"+ edad+",'"+genero+"','"+ telefono+"','"+email+"')";
        console.log(sql);
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
    
    

    app.get('/edit-paciente/:id',(req,res)=>{

        const id = req.params.id
        const sql="SELECT * FROM paciente WHERE id="+id;
        db.query(sql,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result[0]);
        }
        });
    });
app.listen(3001,()=>{
console.log("escuchando en puero 3001")
})