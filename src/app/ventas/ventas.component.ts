import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentasService } from '../ventas.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {


  constructor(private ventasService: VentasService,
     private router:Router) {
  }

  public ventas = [];
  public columnas = ['cliente', 'direccion', 'total', 'detalles'];

  async ngOnInit() {
    this.ventas = await this.ventasService.obtenerVentas();
    console.log(this.ventas);
  }

  public verDetalle(id:string) {
    console.log({id})
    this.router.navigate(["/detalle-venta", id])
  }
}
