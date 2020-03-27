import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../services/user-api.service';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  users: any;

  constructor(private userApi: UserApiService) {}

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
}