import { Component, OnInit ,ViewChild,ElementRef } from '@angular/core';
import { UserApiService } from '../services/user-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('inputUser', {static: true}) inputUser: ElementRef;
  @ViewChild('inputPass', {static: true}) inputPass: ElementRef;

  constructor(private userApi: UserApiService, private router: Router ) {}

  userOriginal = "test";
  passOriginal = "123";

  ngOnInit(): void {
  }

  validarDatos() {

    let inputUser = this.inputUser.nativeElement.value;
    let inputPass = this.inputPass.nativeElement.value;

    if(inputUser == this.userOriginal && inputPass == this.passOriginal)
    {
      this.userApi.autorizar = true
      this.router.navigate(['/usuarios'])
    }
    else{
      alert("Por favor inicie sesión")
    }    

  }


}