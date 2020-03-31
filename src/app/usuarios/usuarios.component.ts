import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../services/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  users;

  constructor(private userApi: UserApiService, private router: Router) {}

  ngOnInit() {
    this.getUsuarios()
  }
  
  getUsuarios(){
    this.userApi.getAllUsers().subscribe(
      res => {
        console.log(res)
        this.users = res
      },
      err => console.log(err)
    )
  }

  verPerfil(i){
    this.router.navigate(["/usuario/", i]);
  }

}