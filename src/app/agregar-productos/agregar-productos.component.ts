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

  @ViewChild("foto", { read: ElementRef })
  foto!: ElementRef;

  constructor(private productoService:ProductosService,private snackbar:MatSnackBar) { }

  public cargando=false;
  
  ngOnInit(): void {
  }

  async guardar(){
    
    if(!this.productModel.nombre||!this.productModel.precio||!this.productModel.descripcion){

      return alert("Ingrese datos faltantes.");
    }


    let archivos = this.foto.nativeElement.files;
    if (!archivos.length) {
      return alert("Seleccion una foto del producto");
    }

    this.cargando=true;
  const idProductoGuardado= await this.productoService.agregarProducto(this.productModel);
  const fd=new FormData();
  for (let x=0;x<archivos.lenght;x++){
    fd.append(`foto_${x}`, archivos[x]);
  }

    fd.append("idProducto",idProductoGuardado);
    const respuesta= await this.productoService.agregarFotosDeProducto(fd);

    this.snackbar.open("Producto guardado","",{
      duration: 1500,
      horizontalPosition:"start",
      verticalPosition:"top"
    });

    this.cargando=false;
    this.productModel=new Producto("","",0,0);
    this.foto.nativeElement.value="";




  }
}
