'use strict'; //IMPORTAR LA LIBRERIA MONGOOSE

var mongoose = require('mongoose');

var app = require('./app');

var port = 3700; //HACER LA CONEXION A LA BASE DE DATOS

mongoose.promise = global.promise;
mongoose.connect('mongodb://localhost:27017/productos').then(function () {
  console.log('La conexión a la base de datos se ha realizado con exito....'); //CREACION DEL SERVIDOR

  app.listen(port, function () {
    console.log('Servidor corriendo correctamente en la url: localhost:3700');
  });
})["catch"](function (err) {
  return console.log(err);
});