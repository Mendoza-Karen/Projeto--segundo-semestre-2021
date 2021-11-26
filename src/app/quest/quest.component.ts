import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {
  perguntas = [
  { texto:' 1ª Pergunta: Você é diagnosticado com ansiedade?'}, 
  { texto:' 2ª Pergunta: Você é diagnosticado com depressão?'},
  { texto:' 3ª Pergunta: Você é diagnosticado com a síndrome de borderline?'},
  { texto:' 4ª Pergunta: Você é diagnosticado com bipolaridade?'},
  { texto:' 5ª Pergunta: Você não é diagnosticado com nenhuma das anteriores ou não deve disponibilidade para os anteriores?'}
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
