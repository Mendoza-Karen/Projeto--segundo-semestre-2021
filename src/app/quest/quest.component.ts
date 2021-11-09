import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {
  perguntas = [
  { texto:' Você é possui ansiedade socialmente?'}, 
  { texto:' Você é diagnosticado com depressão?'},
  { texto:' Você é diagnosticado com ansiedade?'},
  { texto:' Você é diagnoticado com Transtorno de déficit de atenção com hiperatividade(TDAH)?'},
  { texto:' Você se sente infeliz?'}
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
  perguntaAtual = this.perguntas[this.indice]

  anterior(){
    if(
      this.indice<0
    ){}
    else{
    this.indice--,
    this.perguntaAtual=this.perguntas[this.indice]
  }}
  proximo(){
    if(
      this.indice>5
    ){}
    else{
      this.indice++,
      this.perguntaAtual=this.perguntas[this.indice]
    }
  }
  onSalvarResposta(){
      this.clienteService.salvarResposta ( this.indice ,this.respostas[this.indice].resposta)
  }

  constructor(public clienteService: ClienteService) { }

  ngOnInit(): void { 
  }

}
