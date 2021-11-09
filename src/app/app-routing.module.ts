import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
const routes: Routes = [
  {path:'producto/agregar',component:AgregarProductosComponent},
 // {path:'',redirectTo:'/tienda'},//component:DetalleDeVentaComponent
 // {path:'**',redirectTo:'/tienda'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true,})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
