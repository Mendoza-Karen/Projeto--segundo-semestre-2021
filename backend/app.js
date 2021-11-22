const express = require ('express');
const cors =require ('cors');
const app = express(); 
const bodyParser = require('body-parser');
const mongoose= require('mongoose');
const Cliente = require ('./models/cliente');
app.use(bodyParser.json());
app.use(cors());
const Resposta = require('./models/resposta');
const Horario = require ('./models/horarios')

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
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
    });


app.get('/api/listarClientes/:id', (req, res, next) => {
    Cliente.findById(req.params.id).then(cli => {
    if (cli){
    res.status(200).json(cli);
    }
    else
    res.status(404).json({mensagem: "Cliente não encontrado!"})
    })
    });

app.put ("/api/listarClientes/:id", (req, res, next) => {
    const cliente = new Cliente({
    _id: req.params.id,
    nome: req.body.nome,
    senha: req.body.senha,
    email: req.body.email
    });
    Cliente.updateOne({_id: req.params.id}, cliente)
    .then ((resultado) => {
    console.log (resultado)
    });
    res.status(200).json({mensagem: 'Atualização realizada com sucesso'})
    });

app.post('/api/app',(req,res,next)=>{
  const cliente = new Cliente({
    nome: req.body.nome,
    senha: req.body.senha,
    email: req.body.email
    })
    cliente.save()
    then (clienteInserido => {
      res.status(201).json({
      mensagem: 'Cliente inserido',
      id: clienteInserido._id
      })
      })
});

app.get('/api/app',(req, res, next) => {
res.status(200).json({
  mensagem:"Tudo OK",
  clientes:clientes  
});
});

app.get('/api/listarClientes', async (req,res,next)=>{
  const data = await Cliente.find();
  res.status(200).json({
    clientes: data
  })
})

app.delete ('/api/listarClientes/:id', (req, res, next) => {
  Cliente.deleteOne ({_id: req.params.id}).then((resultado) => {
    console.log (resultado);
    res.status(200).json({mensagem: "Cliente removido"})
    });
  });



app.post('/api/respostas',(req,res,next)=>{
  console.log(req.body)
  const resposta = new Resposta({
    idPergunta:req.body.idPergunta,
    resposta:req.body.resposta
  })
  resposta.save() 
  
res.status(201).json({mensagem:'Resposta Salva'})
});

app.post('/api/horarios',(req,res,next)=>{
  console.log(req.body)
  const horario = new Horario({
    idPergunta:req.body.idPergunta,
    resposta:req.body.resposta
  })
  horario.save() 
  
res.status(201).json({mensagem:'Horario Salva'})
});

app.get('/api/listarHorarios', async (req,res,next)=>{
  const data = await Horario.find();
  res.status(200).json({
  listar: data
  })
})

app.get('/api/listarRespostas', async (req,res,next)=>{
  const data = await Resposta.find();
  console.log(data)
  res.status(200).json({
  listar: data
  })
})
module.exports = app;
