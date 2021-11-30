import { Component } from '@angular/core';
import { CarritoService } from './carrito.service';
import { DataSharingService } from './data-sharing.service';
import { Producto } from './producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FRONTEND';

  constructor(private carritoService: CarritoService,
    private dataSharing:DataSharingService){

      this.dataSharing.currentMessage.subscribe(mensaje => {

        if(mensaje== "carrito_update"){
          this.refrescarCarrito();
        }

      })
    }

  public productos: Producto[]=[];

  public async refrescarCarrito() {
    this.productos = await this.carritoService.obtenerProductos();
  }

  public total() {
    let total = 0;
    this.productos.forEach(p=>total+=p.precio);
    return total;
  }

  ngOnInit(): void {
    this.refrescarCarrito();
  }

  
}
