import { Injectable } from '@angular/core';
import { Global } from './global';

@Injectable()
export class UploadService{
    public url: string;

    constructor() {
        
        this.url = Global.url;
    }
    
    //PETICION AJAX CLASICA, PERMITE ADJUNTAR UN ARCHIVO PARA SUBIRLO
    makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string ) {
        return new Promise(function (resolve, reject) {
            
            //SIMULAR UN FORMULARIO CLASICO
            let formData: any = new FormData();
            let xhr = new XMLHttpRequest();
            
            //FOR PARA RECORRER EL ARRAY DE ARCHIVOS QUE PUEDE ESTAR LLEGANDO
            for (let i = 0; i < files.length; i++){
                formData.append(name, files[i], files[i].name);
            }
            
            //PETICION AJAX
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }

            xhr.open('POST', url, true);
            xhr.send(formData);
        });
   }
}