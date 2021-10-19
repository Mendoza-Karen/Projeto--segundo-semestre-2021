import { Injectable } from "@angular/core";
import { Cliente } from "./cliente.model";
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn:'root'})
export class ClienteService{
    private clientes: Cliente[]=[];
    private listaClientesAtualizada = new Subject<Cliente[]>();

    getClientes(): void {
        this.httpClient.get <{mensagem: string, clientes:
        Cliente[]}>('http://localhost:3000/api/app').subscribe(
        (dados) => {
        this.clientes = dados.clientes;
        this.listaClientesAtualizada.next([...this.clientes]);
    }
    )
    }
    adicionarCliente(nome: string, senha: string, email: string) {
        const cliente: Cliente = {
        nome: nome,
        senha: senha,
        email: email,
        };
        this.httpClient.post<{mensagem:string}>('http://localhost:3000/api/app',cliente).subscribe(
            (dados)=>{
                console.log(dados.mensagem);   
                this.clientes.push(cliente);
                this.listaClientesAtualizada.next([...this.clientes]);     
            }
        )
    }
    getListaDeClientesAtualizadaObservable() {
        return this.listaClientesAtualizada.asObservable();
    }

    constructor( private httpClient: HttpClient) {

     }
}