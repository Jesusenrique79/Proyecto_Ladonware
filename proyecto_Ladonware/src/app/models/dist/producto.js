"use strict";
exports.__esModule = true;
exports.Producto = void 0;
var Producto = /** @class */ (function () {
    function Producto(_id, nombre, categoria, precio, cantidad, inventario, image) {
        this._id = _id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.cantidad = cantidad;
        this.inventario = inventario;
        this.image = image;
    }
    return Producto;
}());
exports.Producto = Producto;
