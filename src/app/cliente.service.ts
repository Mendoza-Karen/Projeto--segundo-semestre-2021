import { Injectable } from "@angular/core"; 
import { Cliente } from "./cliente.model";
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Resposta } from "./cliente.model";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

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

  

    atualizarCliente (id: string, nome: string, senha: string, email: string){
        const cliente: Cliente = { id, nome, senha, email};
        this.httpClient.put(`http://localhost:3000/api/listarClientes/${id}`, cliente)
        .subscribe(( res => {
        const copia = [...this.clientes];
        const indice = copia.findIndex (cli => cli.id === cliente.id);
        copia[indice] = cliente;
        this.clientes = copia;
        this.listaClientesAtualizada.next([...this.clientes]);
        this.router.navigate(['/lista'])
        }));
        }

    getCliente (idCliente: string){
        return this.httpClient.get<{_id: string, nome: string, senha: string, email:
            string}>(`http://localhost:3000/api/listarClientes/${idCliente}`);
        }

    getClientes(): void {
        this.httpClient.get <{mensagem: string, clientes:any}>('http://localhost:3000/api/listarClientes').pipe(map((dados2)=>{
            return dados2.clientes.map(cliente => {
            return {
            id: cliente._id,
            nome: cliente.nome,
            senha: cliente.senha,
            email: cliente.email
            }
            })
        })).subscribe(
        (clientes) => {
        this.clientes = clientes;
        this.listaClientesAtualizada.next([...this.clientes]);
    }
    ) 
    } 

    removerCliente (id: string): void{
        this.httpClient.delete(`http://localhost:3000/api/listarClientes/${id}`).subscribe(() => {
        this.clientes = this.clientes.filter((cli) => {
            return cli.id !== id
            });
            this.listaClientesAtualizada.next([...this.clientes]);
                
        });
        }

    adicionarCliente(nome: string, senha: string, email: string) {
        const cliente: Cliente = {
        id: null,
        nome: nome,
        senha: senha,
        email: email,
        };
        this.httpClient.post<{mensagem:string,id:string}>('http://localhost:3000/api/app',cliente).subscribe(
            (dados)=>{
                cliente.id=dados.id;  
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
