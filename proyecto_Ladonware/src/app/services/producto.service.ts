import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../models/producto';
import { Global } from './global';

@Injectable()
export class ProductoService{
    public url: string;

    constructor(
    
        private _http: HttpClient

    ) {
        this.url = Global.url;
    }

    testService() {
        return 'Probando el servicio de Angular';
    }
//METODO PARA GUARDAR EL PRODUCTO
    saveProducto(producto: Producto): Observable<any> {
        let params = JSON.stringify(producto);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'save-producto', params, { headers: headers });
    }

    //METODO PARA SACAR TODOS LOS PRODUCTOS DE LA BASE DE DATOS
     getProductos(): Observable<any> {
	     	let headers = new HttpHeaders().set('Content-Type', 'application/json');

	     	return this._http.get(this.url+'productos', {headers: headers});
    }
    
    //CREAR METODO PARA MOSTRAR LOS DETALLES DEL PRODUCTO
	     //Pasarle un id para buscarlo en la base de datos o en la api
	     getProducto(id): Observable<any>{
	     	let headers = new HttpHeaders().set('Content-Type', 'application/json');

	     	return this._http.get(this.url+'producto/'+id, {headers: headers});

	     }

     deleteProducto(id): Observable<any>{

	     	let headers = new HttpHeaders().set('Content-Type', 'application/json');

	     	return this._http.delete(this.url+'producto/'+id, {headers: headers});
	     }
         
     updateProducto(producto): Observable<any>{

	     	let params = JSON.stringify(producto);

	     	let headers = new HttpHeaders().set('Content-Type', 'application/json');

	     	return this._http.put(this.url+'producto/'+producto._id, params, {headers: headers});
	     }

     
}