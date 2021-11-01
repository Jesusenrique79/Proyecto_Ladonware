"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DetailComponent = void 0;
var core_1 = require("@angular/core");
var producto_service_1 = require("../../services/producto.service");
var global_1 = require("../../services/global");
var DetailComponent = /** @class */ (function () {
    function DetailComponent(_productotService, _router, _route) {
        this._productotService = _productotService;
        this._router = _router;
        this._route = _route;
        this.url = global_1.Global.url;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var id = params.id;
            _this.getProducto(id);
        });
    };
    DetailComponent.prototype.getProducto = function (id) {
        var _this = this;
        this._productotService.getProducto(id).subscribe(function (response) {
            _this.producto = response.producto;
        }, function (error) {
            console.log(error);
        });
    };
    DetailComponent.prototype.deleteProducto = function (id) {
        var _this = this;
        this._productotService.deleteProducto(id).subscribe(function (response) {
            if (response.producto) {
                _this._router.navigate(['productos']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    DetailComponent = __decorate([
        core_1.Component({
            selector: 'app-detail',
            templateUrl: './detail.component.html',
            styleUrls: ['./detail.component.css'],
            providers: [producto_service_1.ProductoService]
        })
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
