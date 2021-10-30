'use strict'; //IMPORTAR MONGOOSE

var mongoose = require('mongoose'); //DEFINIR UN SCHEMA


var Schema = mongoose.Schema; //CREAR SCHEMA DE PRODUCT/ OBJETO MOLDE PARA UTILIZAR PARA CREAR NUEVOS 
//PRODUCTOS(DOCUMENTOS) EN LA BASE DE DATOS 

var ProductoSchema = Schema({
  nombre: String,
  categoria: String,
  precio: Number,
  cantidad: Number,
  inventario: String,
  image: String
});
module.exports = mongoose.model('Producto', ProductoSchema); //EN MONGOOSE SE GUARDA AUTOMATICAMENTE COMO PROJECTS PORQUE LO GENERALIZA 
//Y LO PONE EN MINUSCULAS
//Projects => guarda los documents en la coleccion