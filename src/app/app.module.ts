import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LayoutComponent } from './layout/layout.component';

//SERVICIOS
import { UserApiService } from './services/user-api.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    UsuariosComponent,
    LayoutComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [UserApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
