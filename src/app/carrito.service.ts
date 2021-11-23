import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http:HttpService) { }


  public async obtenerProductos(){
    return await this.http.get("/carrito");
  }

  public async agregarProducto(idProducto:number){
    return await this.http.post("/carrito/agregar",{id_producto: idProducto,});
  }

  public async quitarProducto(idProducto:number){
    return await this.http.post("/carrito/eliminar",{id_producto:idProducto,});
  }

  public async existeEnCarrito(idProducto:number){

    return await this.http.post("/carrito/existe",{id_producto:idProducto,});
  }

  public async terminarCompra(dataCliente:Cliente){

      return await this.http.post("/compra",dataCliente);
  }





}
