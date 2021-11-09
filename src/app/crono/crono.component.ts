import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { HttpClient } from '@angular/common/http';
export interface Cronograma {
  dia: string;
  horario: string;
  atividade: string;
  link: string;
}

let ELEMENT_DATA: Cronograma[] = [
  {dia: 'segunda', horario: '', atividade:'', link:''},
  {dia: 'terça', horario: '', atividade:'', link:''},
  {dia: 'quarta', horario: '', atividade:'', link:''},
  {dia: 'quinta', horario: '', atividade:'', link:''},
  {dia: 'sexta', horario: '', atividade:'', link:''}
]
@Component({
  selector: 'app-crono',
  templateUrl: './crono.component.html',
  styleUrls: ['./crono.component.css']
})
export class CronoComponent implements OnInit {
  displayedColumns: string[] = ['dia', 'horario', 'atividade','link'];
  dataSource = ELEMENT_DATA;
  //dados: Array<{idPergunta:number, resposta:boolean}>=[];

  listarDados(){
    let horarios = this.clienteService.listaHorarios
    let lista = horarios.listar;
    
    let odados = this.clienteService.listaResposta
    let lista2= odados.listar
    
  //  let data = new ELEMENT_DATA
  //   for(let index in ELEMENT_DATA){

  //   }
    for (let i=0;i<5;i++){
      
      if(i==0 && lista[i].resposta==true && lista2[i].resposta==true){
        ELEMENT_DATA[i].horario="8H ás 10H"
      } 
      if(i==0 && lista[i].resposta==false && lista2[i].resposta==true){
        ELEMENT_DATA[i].horario="12H ás 14H"
      }
  
      if(i==1 && lista[i].resposta==true && lista2[i].resposta==true){
        ELEMENT_DATA[i].horario="8H ás 10H"
      } 
      if(i==1 && lista[i].resposta==false && lista2[i].resposta==true){
        ELEMENT_DATA[i].horario="12H ás 14H"
      }
  
      if(i==2 && lista[i].resposta==true && lista2[i].resposta==true){
        ELEMENT_DATA[i].horario="8H ás 10H"
      } 
      if(i==2 && lista[i].resposta==false && lista2[i].resposta==true){
        ELEMENT_DATA[i].horario="12H ás 14H"
      }
  
      if(i==3 && lista[i].resposta==true && lista2[i].resposta==true){
        ELEMENT_DATA[i].horario="8H ás 10H"
      } 
      if(i==3 && lista[i].resposta==false && lista2[i].resposta==true){
        ELEMENT_DATA[i].horario="12H ás 14H"
      }
      if(i==4 && lista[i].resposta==true && lista2[i].resposta==true){
        ELEMENT_DATA[i].horario="8H ás 10H"
      } 
      if(i==4 && lista[i].resposta==false && lista2[i].resposta==true){
        ELEMENT_DATA[i].horario="12H ás 14H"
      }

      console.log(ELEMENT_DATA[i])
   }


    for (let i=0;i<5;i++){
     
      if(i==0 && lista2[i].resposta==true){
        ELEMENT_DATA[i].atividade="Curso de ansiedade social"
      }
      if(i==0 && lista2[i].resposta==false ){
        ELEMENT_DATA[i].atividade=""
      }
      if(i==1 && lista2[i].resposta==true){
        ELEMENT_DATA[i].atividade="Curso contra depressão"
      }
      if(i==0 && lista2[i].resposta==false ){
        ELEMENT_DATA[i].atividade=""
      }
      if(i==2 && lista2[i].resposta==true){
        ELEMENT_DATA[i].atividade="Curso de ansiedade"
      }
      if(i==0 && lista2[i].resposta==false ){
        ELEMENT_DATA[i].atividade=""
      }
      if(i==3 && lista2[i].resposta==true){
        ELEMENT_DATA[i].atividade="Curso TDAH"
      }
      if(i==0 && lista2[i].resposta==false ){
        ELEMENT_DATA[i].atividade=""
      }
      if(i==4 && lista2[i].resposta==true){
        ELEMENT_DATA[i].atividade="Curso contra infelicidade"
      }
      if(i==0 && lista2[i].resposta==false ){
        ELEMENT_DATA[i].atividade=""
      }
      console.log(ELEMENT_DATA[i])
    }
  }


  constructor( public clienteService: ClienteService,
    private httpClient: HttpClient){}

  ngOnInit(): void {
    this.clienteService.listarHorarios(),
    this.clienteService.listarRespostas()
  }

}