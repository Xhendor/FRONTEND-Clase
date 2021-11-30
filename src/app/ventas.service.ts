import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpService) {
  }


  public async obtenerVentas() {
    return await this.http.get("/ventas");
  }

  public async obtenerDetalleDeVenta(idVenta:number) {
    return await this.http.get("/detalle_venta?id=".concat(idVenta.toString()));
  }
}
