import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../producto';
import { environment } from 'src/environments/environment';
import { CarritoService } from '../carrito.service';
import { DataSharingService } from '../data-sharing.service';
@Component({
  selector: 'app-detalle-de-producto',
  templateUrl: './detalle-de-producto.component.html',
  styleUrls: ['./detalle-de-producto.component.css']
})
export class DetalleDeProductoComponent implements OnInit {

  public producto:any = {
    id_productos: 0,
    fotos: [],
    nombre: "",
    descripcion: "",
    precio: "",
  };
    public fotoSeleccionada:string="";
  public indiceSeleccionado=0;
  public existe!:Boolean;
  constructor(private productoService:ProductosService, 
    private activatedRoute:ActivatedRoute, 
    private carritoService:CarritoService,
    private dataSharingService:DataSharingService) { }

  async ngOnInit() {
    const id= this.activatedRoute.snapshot.paramMap.get("id");
    this.producto=await this.productoService.obtenerProductosConFotosPorId(id!);
    console.log('Hi:');
    console.log(this.producto);
    if(this.producto.fotos.length>=0){
      this.seleccionarImagen(0);
    }
    this.refreshState();
  }
  public resolverFoto(foto:string){
    const baseUrl=environment.imagenUrl;
    return `${baseUrl}foto_producto/${foto}`;
  }
  public seleccionarImagen(indice:number){
    this.indiceSeleccionado=indice;
    // Agregar variable de foto
    this.fotoSeleccionada=this.producto.fotos[this.indiceSeleccionado].foto;
  }

  public async agregarAlCarrito(){
    const {id_productos}=this.producto;
    console.log(id_productos);
    const respuesta= await this.carritoService.agregarProducto(id_productos);
    console.log(respuesta);
    this.refreshState();
  }

  public async borrarDelCarrito(){
    const {id_productos}=this.producto;
    const respuesta= await this.carritoService.quitarProducto(id_productos);
    console.log(respuesta);
    this.refreshState();
  }

  async refreshState(){
    const id=this.producto.id_productos;
    console.log(this.producto);
    this.existe=await this.carritoService.existeEnCarrito(id);
    //Envio de mensajes
    this.dataSharingService.changeMessage("carrito_update");
  }

}
