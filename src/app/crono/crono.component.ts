import { Component, OnInit } from '@angular/core';
export interface Cronograma {
  dia: string;
  horario: string;
  atividade: string;
  link: string;
}

const ELEMENT_DATA: Cronograma[] = [
  {dia: 'segunda', horario: '', atividade: '', link:''},
  {dia: 'terça', horario: '', atividade: '', link:''},
  {dia: 'quarta', horario: '', atividade: '', link:''},
  {dia: 'quinta', horario: '', atividade: '', link:''},
  {dia: 'sexta', horario: '', atividade: '', link:''}
]


@Component({
  selector: 'app-crono',
  templateUrl: './crono.component.html',
  styleUrls: ['./crono.component.css']
})
export class CronoComponent implements OnInit {
  displayedColumns: string[] = ['dia', 'horario', 'atividade','link'];
  dataSource = ELEMENT_DATA;
  

  constructor() { }

  ngOnInit(): void {
  }

}