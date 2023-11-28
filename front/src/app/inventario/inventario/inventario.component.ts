import { Component } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import {Inventario} from 'src/app/01Models/inventario'
import {TiendaService} from 'src/app/02API/tienda.service';


interface ProductoEnVenta {
  productoId: number;
  cantidad: number;
}


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {
  inventario: Inventario[] = [];

  tiendaId: number = 0;

  cliente: string = '';
  productosEnVenta: ProductoEnVenta[] = [{ productoId: 0, cantidad: 0 }]; 
  errorMessage: string = '';


  constructor(private route: ActivatedRoute
    ,private tiendaService: TiendaService
    ,private router: Router) {}

  ngOnInit(): void{
    this.tiendaId = Number(this.route.snapshot.paramMap.get('id'));
    this.tiendaService.getInventario(this.tiendaId)
    .subscribe(data => this.inventario=data);
  }

  //ventas
  realizarVenta(): void {
    // Validar que la cantidad no sea negativa para cada producto
    //inv : this.inventario
    if (this.productosEnVenta.every(producto => producto.cantidad >= 0)) {
      // Aquí podrías agregar la lógica para realizar la venta con múltiples productos
      
    
      this.productosEnVenta.forEach(producto =>{
        console.log(producto)
        const productoEnInventario = this.inventario.find(item => Number(item.id) === Number(producto.productoId))

        

        if (productoEnInventario) {
          // Verificar que la cantidad no sea negativa después de la venta
          const nuevaCantidad = Number(productoEnInventario.Cantidad) - producto.cantidad;

          

          if (nuevaCantidad >= 0) {
            productoEnInventario.Cantidad = String(nuevaCantidad);

            this.tiendaService.editInventario(productoEnInventario.id,productoEnInventario).subscribe()
          } else {
            this.errorMessage = `No hay suficiente stock para el producto: ${productoEnInventario.Producto}`;
          }
        }
      })
      //console.log('Venta realizada:');
      //console.log('Cliente:', this.cliente);
      //console.log('Productos en venta:', this.productosEnVenta);
      
    } else {
      this.errorMessage = 'La cantidad de un producto no puede ser negativa.';
    }
  }


  agregarProducto(): void {
    this.productosEnVenta.push({ productoId: 0, cantidad: 0 });
  }

  eliminarProducto(index: number): void {
    this.productosEnVenta.splice(index, 1);
  }

 
  regresarATiendas(): void {
    // Regresar a la vista de tiendas
    this.router.navigate(['/tienda']);
  }

  cerrarSesion(): void {
    // Cerrar sesión y redirigir a la página de inicio de sesión
    this.router.navigate(['/login']);
  }
}

