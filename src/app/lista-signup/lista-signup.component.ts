import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-lista-signup',
  templateUrl: './lista-signup.component.html',
  styleUrls: ['./lista-signup.component.css']
})
export class ListaSignupComponent implements OnInit, OnDestroy {
  
  clientes: Cliente[]=[]
  private clientesSubscription:Subscription;
    
  constructor(public clienteService: ClienteService) {}

  onDelete (id: string): void{
    this.clienteService.removerCliente(id);
    }
    
  ngOnInit(): void {
  this.clienteService.getClientes(); 
  this.clientesSubscription = this.clienteService
  .getListaDeClientesAtualizadaObservable()
  .subscribe((clientes: Cliente[]) => {
    this.clientes = clientes;
});

  }
  ngOnDestroy(): void{
    this.clientesSubscription.unsubscribe();
  }


}
