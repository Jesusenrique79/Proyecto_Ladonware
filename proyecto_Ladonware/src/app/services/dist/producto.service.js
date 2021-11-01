"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductoService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var global_1 = require("./global");
var ProductoService = /** @class */ (function () {
    function ProductoService(_http) {
        this._http = _http;
        this.url = global_1.Global.url;
    }
    ProductoService.prototype.testService = function () {
        return 'Probando el servicio de Angular';
    };
    //METODO PARA GUARDAR EL PRODUCTO
    ProductoService.prototype.saveProducto = function (producto) {
        var params = JSON.stringify(producto);
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'save-producto', params, { headers: headers });
    };
    //METODO PARA SACAR TODOS LOS PRODUCTOS DE LA BASE DE DATOS
    ProductoService.prototype.getProductos = function () {
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'productos', { headers: headers });
    };
    //CREAR METODO PARA MOSTRAR LOS DETALLES DEL PRODUCTO
    //Pasarle un id para buscarlo en la base de datos o en la api
    ProductoService.prototype.getProducto = function (id) {
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'producto/' + id, { headers: headers });
    };
    ProductoService.prototype.deleteProducto = function (id) {
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this._http["delete"](this.url + 'producto/' + id, { headers: headers });
    };
    ProductoService.prototype.updateProducto = function (producto) {
        var params = JSON.stringify(producto);
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + 'producto/' + producto._id, params, { headers: headers });
    };
    ProductoService = __decorate([
        core_1.Injectable()
    ], ProductoService);
    return ProductoService;
}());
exports.ProductoService = ProductoService;
