import { Injectable } from "@angular/core";
import { Cliente } from "./cliente.model";
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Resposta } from "./cliente.model";

@Injectable({ providedIn:'root'})
export class ClienteService{
    private clientes: Cliente[]=[];
    private listaClientesAtualizada = new Subject<Cliente[]>();
    private respostas: Resposta[]=[];

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

    salvarResposta(idPergunta: number , resposta:boolean){
        const respostas: Resposta ={
            idPergunta: idPergunta,
            resposta: resposta
        }
    }
}
