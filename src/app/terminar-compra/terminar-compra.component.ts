import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Cliente } from '../cliente';
import { DataSharingService } from '../data-sharing.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-terminar-compra',
  templateUrl: './terminar-compra.component.html',
  styleUrls: ['./terminar-compra.component.css']
})
export class TerminarCompraComponent implements OnInit {

  public productos:Producto[]=[];
  public isTerminada=false;
  public cliente=new Cliente("","");
  public columnas =['nombre','descripcion','precio','quitar'];
  constructor(private carritoService:CarritoService,
     private dataSharing:DataSharingService) { }

  async ngOnInit() {
    await this.obtenerProductos();
  }

  public async revisarYfinalziar(stepper:any){
    if(!this.cliente.nombre&&!this.cliente.direccion){
      return alert('Falta escribir datos');
    }
    const respuesta= await this.carritoService.terminarCompra(this.cliente);
    this.isTerminada=true;
    stepper.next();
    this.dataSharing.changeMessage('carrito_update');
  }

  public total(){
    let total=0;
    this.productos.forEach(p => total += p.precio)
    return total;
  }

  public async quitar(producto:Producto){
    await this.carritoService.quitarProducto(producto.id_productos);
    await this.obtenerProductos();
    this.dataSharing.changeMessage('carrito_update');

  }

  public async obtenerProductos(){
    this.productos= await this.carritoService.obtenerProductos();

  }

}
