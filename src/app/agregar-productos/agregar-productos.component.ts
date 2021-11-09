import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductosService } from '../productos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent implements OnInit {

  constructor(private productoService:ProductosService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  async guardar(){
    
  }
}
