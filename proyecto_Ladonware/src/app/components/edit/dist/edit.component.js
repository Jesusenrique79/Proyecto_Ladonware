"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditComponent = void 0;
var core_1 = require("@angular/core");
var producto_service_1 = require("../../services/producto.service");
var upload_service_1 = require("../../services/upload.service");
var global_1 = require("../../services/global");
var EditComponent = /** @class */ (function () {
    function EditComponent(_productotService, _uploadService, _router, _route) {
        this._productotService = _productotService;
        this._uploadService = _uploadService;
        this._router = _router;
        this._route = _route;
        this.title = " Editar Producto";
        this.url = global_1.Global.url;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var id = params.id;
            _this.getProducto(id);
        });
    };
    EditComponent.prototype.getProducto = function (id) {
        var _this = this;
        this._productotService.getProducto(id).subscribe(function (response) {
            _this.producto = response.producto;
        }, function (error) {
            console.log(error);
        });
    };
    EditComponent.prototype.onSubmit = function (form) {
        var _this = this;
        //GUARDAR LOS DATOS
        this._productotService.updateProducto(this.producto).subscribe(function (response) {
            if (response.producto) {
                //CUANDO SUBA LA IMAGEN CUANDO TENGA QUE SUBIRLA
                if (_this.filesToUpload) {
                    _this._uploadService.makeFileRequest(global_1.Global.url + "upload-image/" + response.producto._id, [], _this.filesToUpload, 'image')
                        .then(function (result) {
                        _this.save_producto = result.producto;
                        _this.status = 'success';
                    });
                }
                else {
                    _this.save_producto = response.producto;
                    _this.status = 'success';
                }
                //SUBIR LA IMAGEN 
            }
            else {
                _this.status = 'failed';
            }
        }, function (error) {
            console.log(error);
        });
    };
    EditComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            templateUrl: '../create/create.component.html',
            styleUrls: ['./edit.component.css'],
            providers: [producto_service_1.ProductoService, upload_service_1.UploadService]
        })
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
