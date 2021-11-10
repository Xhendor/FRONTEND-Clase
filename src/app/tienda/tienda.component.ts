import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  public productos=[];

  constructor(private productoService:ProductosService) { }

  async ngOnInit() {
    this.productos= await this.productoService.obtenerProductosConFotos();
  }

}
