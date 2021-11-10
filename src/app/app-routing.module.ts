import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductosComponent} from './productos/productos.component';
import {ClientesComponent} from './clientes/clientes.component';
import {VentasComponent} from './ventas/ventas.component';
import {TiendaComponent} from './tienda/tienda.component';
import {AgregarProductosComponent} from "./agregar-productos/agregar-productos.component";
import {DetalleDeProductoComponent} from "./detalle-de-producto/detalle-de-producto.component";
import {TerminarCompraComponent} from "./terminar-compra/terminar-compra.component";
import {DetalleDeVentaComponent} from "./detalle-de-venta/detalle-de-venta.component";


const routes: Routes = [
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/agregar', component: AgregarProductosComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'ventas', component: VentasComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'producto/detalle/:id', component: DetalleDeProductoComponent},
  {path: 'terminar_compra', component: TerminarCompraComponent},
  {path: 'detalle-venta/:id', component: DetalleDeVentaComponent},
  {path: '', redirectTo: "/tienda", pathMatch: "full"},
  {path: '**', redirectTo: "/tienda"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true,})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
