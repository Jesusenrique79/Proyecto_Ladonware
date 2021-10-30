'use strict';

var Producto = require('../models/product');

var fs = require('fs');

var path = require('path');

var controller = {
  home: function home(req, res) {
    return res.status(200).send({
      message: 'Soy la home'
    });
  },
  test: function test(req, res) {
    return res.status(200).send({
      message: 'Soy el metodo o acción test del controlador de product'
    });
  },
  //METODO PARA GUARDAR PRODUCTO
  saveProducto: function saveProducto(req, res) {
    var producto = new Producto();
    var params = req.body;
    producto.nombre = params.nombre;
    producto.categoria = params.categoria;
    producto.precio = params.precio;
    producto.cantidad = params.cantidad;
    producto.inventario = params.inventario;
    producto.image = null; //METODO PARA GUARDAR EL PRODUCTO EN LA BASE DE DATOS

    producto.save(function (err, productoStored) {
      if (err) return res.status(500).send({
        message: 'Error al guardar el documento.'
      });
      if (!productoStored) return res.status(404).send({
        message: 'No se ha podido guardar el producto.'
      });
      return res.status(200).send({
        producto: productoStored
      });
    });
  },
  //METODO PARA LISTAR UN PRODUCTO
  getProducto: function getProducto(req, res) {
    var productoId = req.params.id;
    if (productoId == null) return res.status(404).send({
      message: 'El producto no existe.'
    });
    Producto.findById(productoId, function (err, producto) {
      if (err) return res.status(500).send({
        message: 'Error al devolver los datos.'
      });
      if (!producto) return res.status(404).send({
        message: 'El producto no existe.'
      });
      return res.status(200).send({
        producto: producto
      });
    });
  },
  //METODO PARA LISTAR VARIOS PRODUCTOS
  getProductos: function getProductos(req, res) {
    Producto.find({}).sort('-categoria').exec(function (err, productos) {
      if (err) return res.status(500).send({
        message: 'Error al devolver los datos.'
      });
      if (!productos) return res.status(404).send({
        message: 'No hay productos para mostrar.'
      });
      return res.status(200).send({
        productos: productos
      });
    });
  },
  //METODO PARA ACTUALIZAR PRODUCTO
  updateProducto: function updateProducto(req, res) {
    //PASARLE UN PARAMETRO POR LA URL PARA SABER QUE PRODUCTO SE QUIERE ACTUALIZAR
    var productoId = req.params.id; //RECOGER TODO EL BODY DE LA PETICION

    var update = req.body;
    Producto.findByIdAndUpdate(productoId, update, {
      "new": true
    }, function (err, productoUpdated) {
      if (err) return res.status(500).send({
        message: 'Error al actualizar.'
      });
      if (!productoUpdated) return res.status(404).send({
        message: 'No existe el producto.'
      });
      return res.status(200).send({
        producto: productoUpdated
      });
    });
  },
  //METODO PARA BORRAR PRODUCTO
  deleteProducto: function deleteProducto(req, res) {
    var productoId = req.params.id;
    Producto.findByIdAndRemove(productoId, function (err, productoRemoved) {
      if (err) return res.status(500).send({
        message: 'No se ha podido borrar el producto.'
      });
      if (!productoRemoved) return res.status(404).send({
        message: 'No se puede eliminar el producto'
      });
      return res.status(200).send({
        producto: productoRemoved
      });
    });
  },
  uploadImage: function uploadImage(req, res) {
    //RECOJER EL ID DEL PRODUCTO EN DONDE SE VA A GUARDAR LA IMAGEN
    var productoId = req.params.id;
    var fileName = 'Imagen no subida...';

    if (req.files) {
      //VARIABLE PARA GUARDAR LA IMAGEN A LA BASE DE DATOS
      var filePath = req.files.image.path; //SACAR EL ARCHIVO QUE SE A GUARDADO EN EL DISCO DURO
      //SACAR EL STRING QUE ESTA DESPUES DEL SEPARADOR \\

      var fileSplit = filePath.split('\\'); //RECOGER EL INDICE [1] QUE ES EL NOMBRE DEL ARCHIVO

      var fileName = fileSplit[1];
      var extSplit = fileName.split('\.');
      var fileExt = extSplit[1];

      if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {
        Producto.findByIdAndUpdate(productoId, {
          image: fileName
        }, {
          "new": true
        }, function (err, productoUpdated) {
          if (err) return res.status(500).send({
            message: 'La imagen no se ha subido.'
          });
          if (!productoUpdated) return res.status(404).send({
            message: 'El producto no existe y no se ha asignado la imagen'
          });
          return res.status(200).send({
            producto: productoUpdated
          });
        });
      } else {
        fs.unlink(filePath, function (err) {
          return res.status(200).send({
            message: 'La extensión no es valida'
          });
        });
      }
    } else {
      return res.status(200).send({
        message: fileName
      });
    }
  },
  //METODO PARA DEVOLVER LA IMAGEN
  getImageFile: function getImageFile(req, res) {
    var file = req.params.image;
    var path_file = './uploads/' + file;
    fs.exists(path_file, function (exists) {
      if (exists) {
        return res.sendFile(path.resolve(path_file));
      } else {
        return res.status(200).send({
          message: 'No existe la imagen....'
        });
      }
    });
  }
};
module.exports = controller;