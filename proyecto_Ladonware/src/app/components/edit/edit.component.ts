import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[ProductoService,  UploadService]
})
export class EditComponent implements OnInit {

  public title: string;
  public producto: Producto;
  public save_producto;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string;
  constructor(
    
    private _productotService: ProductoService,
    private _uploadService: UploadService,
    private _router: Router,
  	private _route: ActivatedRoute

  ) {
    this.title = " Editar Producto";
    this.url = Global.url;
   
   }

  ngOnInit(){

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

  onSubmit(form) {
   
    //GUARDAR LOS DATOS
    this._productotService.updateProducto(this.producto).subscribe(
      response => {
        if (response.producto) {
          //CUANDO SUBA LA IMAGEN CUANDO TENGA QUE SUBIRLA
          if (this.filesToUpload) {
              this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.producto._id, [], this.filesToUpload, 'image')
      				.then((result:any)=>{

      					this.save_producto = result.producto;

      					this.status = 'success';
      				
      				});
          } else {
              this.save_producto = response.producto;

      				this.status = 'success';
          }
          //SUBIR LA IMAGEN 
        
        } else {
          this.status = 'failed';
         }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

   fileChangeEvent(fileInput: any){

  	this.filesToUpload = <Array<File>>fileInput.target.files;

  }

}
