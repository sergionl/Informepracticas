import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { TiendaComponent } from './tienda/tienda/tienda.component';
import {InventarioComponent} from './inventario/inventario/inventario.component'


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'inventario/:id', component: InventarioComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
