import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService} from '../../services/producto.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProductoService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public producto: Producto;

  constructor(
    private _productotService: ProductoService,
    private _router: Router,
  	private _route: ActivatedRoute
  ) {
  
    this.url = Global.url;

   }

  ngOnInit():void {

    	this._route.params.subscribe(params => {

  		let id = params.id;

  		this.getProducto(id);

  	});
  }

  getProducto(id){

  	this._productotService.getProducto(id).subscribe(

  			response =>{

				this.producto = response.producto;  					

  			},

  			error =>{

  				console.log(<any>error);
  			}

  		)

  }

  deleteProducto(id){

  	this._productotService.deleteProducto(id).subscribe(

  			response =>{
  				if(response.producto){

  					this._router.navigate(['productos']);
  				}
  			},
  			error =>{
  				console.log(<any>error);
  			}

  		);

  }


}
