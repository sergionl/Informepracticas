import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Tienda} from 'src/app/01Models/tienda';
import {TiendaService} from 'src/app/02API/tienda.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {

  constructor(
    private router:Router,
    private tiendaService: TiendaService) { }

  tiendas: Tienda[] = []

  ngOnInit(): void {
    this.tiendaService.getTiendas()
    .subscribe(data => {
      this.tiendas = data;
      console.log(data);
    })
  }

  navigateToInventario(id: number): void {
    // Redirige al componente de inventario con la URL que contiene el ID de la tienda
    this.router.navigate(['/inventario', id]);
  }
  cerrarSesion(): void {
    // Cerrar sesión y redirigir a la página de inicio de sesión
    this.router.navigate(['/login']);
  }
}
