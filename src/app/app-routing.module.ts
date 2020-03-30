import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
//COMPONENTES
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
// import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'usuario/:index', component: UsuarioComponent  },
  { path: 'usuarios', component: UsuariosComponent }
  //{ path: '**', component:  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
