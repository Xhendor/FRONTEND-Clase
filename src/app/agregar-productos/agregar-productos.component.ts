import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Producto } from '../producto';
import { ProductosService } from '../productos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent implements OnInit {

  productModel = new Producto("","",0,0);

  @ViewChild("foto", {
    read: ElementRef
  }) foto: ElementRef | undefined;

  constructor(private productoService:ProductosService,private snackbar:MatSnackBar) { }

  public cargando=false;
  
  ngOnInit(): void {
  }

  async guardar() {
    if (!this.productModel.nombre) {
      return alert("Escribe un nombre");
    }
    if (!this.productModel.descripcion) {
      return alert("Escribe la descripción");
    }
    if (!this.productModel.precio) {
      return alert("Escribe el precio");
    }
    let archivos = this.foto!.nativeElement.files;
    if (!archivos.length) {
      return alert("Selecciona al menos una foto");
    }
    this.cargando = true;
    // Guardamos producto
    const idProductoGuardado = await this.productoService.agregarProducto(this.productModel);
    // Y luego las fotos
    const fd = new FormData();
    for (let x = 0; x < archivos.length; x++) {
      fd.append(`foto_${x}`, archivos[x])
    }
    fd.append("idProducto", idProductoGuardado);
    const respuesta = await this.productoService.agregarFotosDeProducto(fd);
    this.snackbar.open("Producto guardado", "", {
      duration: 1500,
      horizontalPosition: "start",
      verticalPosition: "top",
    });

    this.cargando = false;
    this.productModel = new Producto("","", 0,0);
    this.foto!.nativeElement.value = "";
  }
}
