import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../services/user-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  users;
  user;
  index;

  constructor(
    private userApi: UserApiService,
    private activatedRoute: ActivatedRoute
  ) {
    this.getIndex();
  }

  ngOnInit() {
    this.getUsuarios();
  }
  getUsuarios() {
    this.userApi.getAllUsers().subscribe(
      res => {
        this.users = res;
        this.user = this.users[this.index];
        console.log(this.users[this.index]);
      },
      err => console.log(err)
    );
  }

  getIndex() {
    this.activatedRoute.paramMap.subscribe(
      res => (this.index = parseInt(res.get('index')))
    );
  }
}