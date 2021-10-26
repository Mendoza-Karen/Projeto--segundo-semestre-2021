import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-dispo',
  templateUrl: './dispo.component.html',
  styleUrls: ['./dispo.component.css']
}) 
export class DispoComponent implements OnInit {

dias =[
  { texto:'Segunda-feira'},
  { texto:'Terça-feira'},
  { texto:'Quarta-feira'},
  { texto:'Quinta-feira'},
  { texto:'Sexta-feira'}
]
respostas = [
  {idPergunta:null ,resposta:false},
  {idPergunta:null ,resposta:false},
  {idPergunta:null ,resposta:false},
  {idPergunta:null ,resposta:false},
  {idPergunta:null ,resposta:false}
]
respostaS(){
      this.respostas[this.indice]= {idPergunta:this.indice, resposta:true}
  }
respostaN(){
      this.respostas[this.indice]={idPergunta:this.indice, resposta:false}
  }

indice = 0
diaAtual = this.dias[this.indice]

anterior(){
  if(
      this.indice<0
    ){}
  else{
      this.indice--,
      this.diaAtual=this.dias[this.indice]
  }
}
proximo(){
    if(
      this.indice>5
    ){}
    else{
      this.indice++,
      this.diaAtual=this.dias[this.indice]
  }
}
onSalvarResposta(){
  for(let i=0; i<5; i++){
    this.clienteService.salvarResposta ( i ,this.respostas[i][i])
  }
}

  constructor(public clienteService: ClienteService) { }

  ngOnInit(): void {
  }

}
