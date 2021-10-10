import { Component, OnInit } from '@angular/core';
export interface Cronograma {
  dia: string;
  horario: string;
  atividade: string;
  profi: string;
  link: string;
}

const ELEMENT_DATA: Cronograma[] = [
  {dia: 'segunda', horario: '', atividade: '', profi: '', link:''},
  {dia: 'terça', horario: '', atividade: '', profi: '', link:''},
  {dia: 'quarta', horario: '', atividade: '', profi: '', link:''},
  {dia: 'quinta', horario: '', atividade: '', profi: '', link:''},
  {dia: 'sexta', horario: '', atividade: '', profi: '', link:''}
]


@Component({
  selector: 'app-crono',
  templateUrl: './crono.component.html',
  styleUrls: ['./crono.component.css']
})
export class CronoComponent {
  displayedColumns: string[] = ['dia', 'horario', 'atividade', 'profi','link'];
  dataSource = ELEMENT_DATA;
  

  constructor() { }

  ngOnInit(): void {
  }

}