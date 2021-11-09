import { Injectable } from "@angular/core"; 
import { Cliente } from "./cliente.model";
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Resposta } from "./cliente.model";
import { Router } from "@angular/router";

@Injectable({ providedIn:'root'})
export class ClienteService{
    private clientes: Cliente[]=[];
    private listaClientesAtualizada = new Subject<Cliente[]>();
    public listaHorarios = {
        listar: []
    };
    public listaResposta = {
        listar: []
    };

    getClientes(): void {
        this.httpClient.get <{mensagem: string, clientes:
        Cliente[]}>('http://localhost:3000/api/listarClientes').subscribe(
        (dados2) => {
        this.clientes = dados2.clientes;
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



    
    salvarResposta(idPergunta: number , resposta:boolean){
        const respostas: Resposta ={
            idPergunta: idPergunta,
            resposta: resposta
        };
        this.httpClient.post<{mensagem:string}>('http://localhost:3000/api/respostas',respostas).subscribe(
            (dados)=>{
                console.log(dados.mensagem);
                // this..push(respostas);
                // this.router.navigate(['/crono'])   
            }
        )
    }
    salvarHorario(idPergunta: number , resposta:boolean){
        const respostas: Resposta ={
            idPergunta: idPergunta,
            resposta: resposta
        };
        this.httpClient.post<{mensagem:string}>('http://localhost:3000/api/horarios',respostas).subscribe(
            (dados)=>{
                console.log(dados.mensagem);
                // this..push(respostas);
                // this.router.navigate(['/crono'])   
            }
        )
    }

    listarHorarios(){
        this.httpClient.get<{listar: any }>('http://localhost:3000/api/listarHorarios')
            .subscribe((dados) => {
                this.listaHorarios = dados;
            }
        )
    }
    listarRespostas(){
        this.httpClient.get<{listar: any }>('http://localhost:3000/api/listarRespostas').subscribe(
           (dados)=> {
               this.listaResposta = dados;
           }
           
        )
    }


    
    constructor( private httpClient: HttpClient,
        private router: Router) {}
    
    
}
