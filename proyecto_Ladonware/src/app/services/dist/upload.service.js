"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UploadService = void 0;
var core_1 = require("@angular/core");
var global_1 = require("./global");
var UploadService = /** @class */ (function () {
    function UploadService() {
        this.url = global_1.Global.url;
    }
    //PETICION AJAX CLASICA, PERMITE ADJUNTAR UN ARCHIVO PARA SUBIRLO
    UploadService.prototype.makeFileRequest = function (url, params, files, name) {
        return new Promise(function (resolve, reject) {
            //SIMULAR UN FORMULARIO CLASICO
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            //FOR PARA RECORRER EL ARRAY DE ARCHIVOS QUE PUEDE ESTAR LLEGANDO
            for (var i = 0; i < files.length; i++) {
                formData.append(name, files[i], files[i].name);
            }
            //PETICION AJAX
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    };
    UploadService = __decorate([
        core_1.Injectable()
    ], UploadService);
    return UploadService;
}());
exports.UploadService = UploadService;
