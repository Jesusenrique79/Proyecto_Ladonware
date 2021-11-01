import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService} from '../../services/producto.service';
import { Global } from '../../services/global';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductoService]
})
export class ProductosComponent implements OnInit {

  public productos: Producto[];
	public url: string;

  constructor(
    	private _productotService: ProductoService
  ) {
      
    this.url = Global.url;
    
   }

  ngOnInit() {

    this.getProductos();
  }

  getProductos(){
    this._productotService.getProductos().subscribe(

  			response =>{

  				if(response.productos){
  					this.productos = response.productos;
  				}
  			},

  			error =>{

  				console.log(<any>error);
  			}

  		);
  }



}
