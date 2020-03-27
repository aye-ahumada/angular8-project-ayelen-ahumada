import { Component, OnInit ,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('inputUser', {static: true}) inputUser: ElementRef;
  @ViewChild('inputPass', {static: true}) inputPass: ElementRef;

  constructor() { }

  userOriginal = "test";
  passOriginal = "123";

  ngOnInit(): void {
  }


  validarDatos() {

    let inputUser = this.inputUser.nativeElement.value;
    let inputPass = this.inputPass.nativeElement.value;

    if(inputUser == this.userOriginal && inputPass == this.passOriginal)
    {
      alert('todo OK')
    }
    else{
      alert('todo mal')
    }    

  }


}