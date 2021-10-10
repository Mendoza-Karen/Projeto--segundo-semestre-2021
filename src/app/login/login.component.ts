import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  value = 'Clear me';
onAdicionarCliente(){
  console.log('inserindo cliente...')
}
}