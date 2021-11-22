import { Component , OnInit,  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  private modo: string = "criar";
  private idCliente: string;
  public cliente: Cliente;

  ngOnInit():void{
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("idCliente")){
        this.modo = "editar";
        this.idCliente = paramMap.get("idCliente");
        this.clienteService.getCliente(this.idCliente).subscribe( dadosCli => {
          this.cliente = {
          id: dadosCli._id,
          nome: dadosCli.nome,
          senha: dadosCli.senha,
          email: dadosCli.email
          };
          });
      }
      else{
        this.modo = "criar";
        this.idCliente = null;
      }
      });
   
  }
  constructor(public clienteService: ClienteService, public route: ActivatedRoute) {}

 onAdicionarCliente(form:NgForm) {
  if (form.invalid) {
    return;
    }
    if (this.modo === "criar"){
    this.clienteService.adicionarCliente(
    form.value.nome,
    form.value.senha,
    form.value.email
    );
    }
    else{
      this.clienteService.atualizarCliente(
      this.idCliente,
      form.value.nome,
      form.value.fone,
      form.value.email
      )
      }

    form.resetForm();
    }

}