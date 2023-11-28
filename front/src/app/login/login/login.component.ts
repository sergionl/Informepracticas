import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{User,loginForm} from 'src/app/01Models/user';
import {TiendaService} from 'src/app/02API/tienda.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  
  constructor(
    private router: Router, 
    private tiendaService: TiendaService) { }

  user: User = {
    id : 0,
    usuario: '',
    correo: '',
    contraseña: '',

  }

  login: loginForm = {
    correo: '',
    contraseña: '',
  }

  onSubmit(): void {
    
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);

    this.login.correo = this.username;
    this.login.contraseña = this.password;

    if(this.login.correo != "" && this.login.contraseña != ""){
      this.tiendaService.login(this.login)
      .subscribe((data:any)=>{
        this.user = data;
        localStorage.setItem('current',JSON.stringify(data[0].id))
        this.router.navigate(['/tienda']);
      })
    }

    //const autenticacionExitosa = true;
//
    //if (autenticacionExitosa) {
    //  // Redirigir a la tienda después del inicio de sesión
    //  this.router.navigate(['/tienda']);
    //}
  }
}
