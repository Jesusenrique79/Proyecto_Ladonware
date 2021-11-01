import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProductoService,  UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public producto: Producto;
  public save_producto;
  public status: string;
  public filesToUpload: Array<File>;
  constructor(
    
    private _productoService: ProductoService,
    private _uploadService: UploadService

  ) {
    this.title = " Crear Producto";
    this.producto = new Producto('', '', '', 0, 0, '', ''); 
   }

  ngOnInit() {
  }

  onSubmit(form) {
   
    //GUARDAR LOS DATOS
    this._productoService.saveProducto(this.producto).subscribe(
      response => {
        if (response.producto) {

          //SUBIR LA IMAGEN 
          if (this.filesToUpload) {
            this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.producto._id, [], this.filesToUpload, 'image')
        				.then((result:any)=>{

      					this.save_producto = result.producto;

      					this.status = 'success';
      					form.reset();
      				});
          } else {
            	this.save_producto = response.producto;

            this.status = 'success';
            	form.reset();
          }
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
