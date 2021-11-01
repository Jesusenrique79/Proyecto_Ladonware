"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateComponent = void 0;
var core_1 = require("@angular/core");
var producto_1 = require("../../models/producto");
var producto_service_1 = require("../../services/producto.service");
var upload_service_1 = require("../../services/upload.service");
var global_1 = require("../../services/global");
var CreateComponent = /** @class */ (function () {
    function CreateComponent(_productoService, _uploadService) {
        this._productoService = _productoService;
        this._uploadService = _uploadService;
        this.title = " Crear Producto";
        this.producto = new producto_1.Producto('', '', '', 0, 0, '', '');
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.onSubmit = function (form) {
        var _this = this;
        //GUARDAR LOS DATOS
        this._productoService.saveProducto(this.producto).subscribe(function (response) {
            if (response.producto) {
                //SUBIR LA IMAGEN 
                if (_this.filesToUpload) {
                    _this._uploadService.makeFileRequest(global_1.Global.url + "upload-image/" + response.producto._id, [], _this.filesToUpload, 'image')
                        .then(function (result) {
                        _this.save_producto = result.producto;
                        _this.status = 'success';
                        form.reset();
                    });
                }
                else {
                    _this.save_producto = response.producto;
                    _this.status = 'success';
                    form.reset();
                }
            }
            else {
                _this.status = 'failed';
            }
        }, function (error) {
            console.log(error);
        });
    };
    CreateComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: 'app-create',
            templateUrl: './create.component.html',
            styleUrls: ['./create.component.css'],
            providers: [producto_service_1.ProductoService, upload_service_1.UploadService]
        })
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
