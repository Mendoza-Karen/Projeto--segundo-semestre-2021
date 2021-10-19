const express = require ('express');
const cors =require ('cors');
const app = express();
const bodyParser = require('body-parser');
const mongoose= require('mongoose');
const Cliente = require ('./models/cliente');
app.use(bodyParser.json());
app.use(cors());


mongoose.connect(`mongodb+srv://karen:niconico123@cluster0.qbt0c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
.then(() => {
  console.log ("Conexão OK")
  }).catch(() => {
  console.log("Conexão NOK")
  });

const clientes = [
    {
    id: '1',
    nome: 'Jose',
    senha: '11223344',
    email: 'jose@email.com'
    },
    {
    id: '2',
    nome: 'Jaqueline',
    senha: '22112211',
    email: 'jaqueline@email.com'
    }
]
app.use ((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE,OPTIONS');
    next();
    });

app.post('/api/app',(req,res,next)=>{
  const cliente = new Cliente({
    nome: req.body.nome,
    senha: req.body.senha,
    email: req.body.email
    })
    cliente.save()
console.log(cliente)
res.status(201).json({mensagem:'Cliente inserido'})
});

app.get('/api/app',(req, res, next) => {
res.status(200).json({
  mensagem:"Tudo OK",
  clientes:clientes  
});
});
module.exports = app;
