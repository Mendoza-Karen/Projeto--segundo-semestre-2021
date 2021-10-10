import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
value = 'Clear me';
onAdicionarCliente() {
console.log('inserindo cliente...');
}
checked = false;


  constructor() { }

  ngOnInit(): void {
  }

}
