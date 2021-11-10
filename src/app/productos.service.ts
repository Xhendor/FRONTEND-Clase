import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpService) { }


  public async obtenerProductos(){
    return await this.http.get("/productos");
  }
  
  public async eliminarProducto(idProducto: number) {
    console.log(idProducto);
    return await this.http.delete("/producto?id=".concat(idProducto.toString()));
  }

  public async agregarProducto(producto:Producto){
    return await this.http.post("/producto",producto)
  }

  public async agregarFotosDeProducto(fotos:FormData){
    return await this.http.formdata("/fotos_producto",fotos);
  }
  public async obtenerProductosConFotos(){
    return await this.http.get("/productos_con_fotos");
  }

  public async obtenerProductosConFotosPorId(idProducto:number){
    return await this.http.get("/producto?id=".concat(idProducto.toString()));
  }
}
