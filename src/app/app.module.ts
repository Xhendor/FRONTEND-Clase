import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FormsModule} from "@angular/forms";
import {MatCardMdImage, MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatChipsModule} from "@angular/material/chips";
import {MatBadgeModule} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSliderModule} from '@angular/material/slider';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { DetalleDeProductoComponent } from './detalle-de-producto/detalle-de-producto.component';
import { DetalleDeVentaComponent } from './detalle-de-venta/detalle-de-venta.component';
import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { ProductosComponent } from './productos/productos.component';
import { TarjetaProductoComponent } from './tarjeta-producto/tarjeta-producto.component';
import { TiendaComponent } from './tienda/tienda.component';
import { VentasComponent } from './ventas/ventas.component';
import { TerminarCompraComponent } from './terminar-compra/terminar-compra.component';


@NgModule({
  declarations: [
    AppComponent,
    AgregarProductosComponent,
    ClientesComponent,
    DetalleDeProductoComponent,
    DetalleDeVentaComponent,
    LoadingButtonComponent,
    ProductosComponent,
    TarjetaProductoComponent,
    TiendaComponent,
    VentasComponent,
    TerminarCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatBadgeModule,
    MatMenuModule,
    MatStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
