import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ClienteService } from '../cliente.service';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  constructor(public clienteService: ClienteService) {}

 onAdicionarCliente(form:NgForm) {
  if (form.invalid) {
    return;
    }
    this.clienteService.adicionarCliente(
    form.value.nome,
    form.value.senha,
    form.value.email
    );
    form.resetForm();
  
  }

  ngOnInit():void{
   
  }


}