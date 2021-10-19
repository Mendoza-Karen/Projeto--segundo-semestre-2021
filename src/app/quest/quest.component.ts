import { Component, OnInit } from '@angular/core';

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
  { texto:' Você é diagnoticado com Transtorno do déficit de atenção com hiperatividade(TDAH)?'},
  { texto:' Você se sente infeliz?'}
  ]
 respostas=[false,false,false,false,false]
  respostaS(){
    this.respostas[this.indice]=true
  }
  respostaN(){
    this.respostas[this.indice]=false
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


  constructor() { }

  ngOnInit(): void {
  }

}
