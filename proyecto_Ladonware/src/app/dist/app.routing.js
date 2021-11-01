"use strict";
exports.__esModule = true;
exports.routing = exports.appRoutingProviders = void 0;
var router_1 = require("@angular/router");
var productos_component_1 = require("./components/productos/productos.component");
var create_component_1 = require("./components/create/create.component");
var detail_component_1 = require("./components/detail/detail.component");
var edit_component_1 = require("./components/edit/edit.component");
var error_component_1 = require("./components/error/error.component");
var appRoutes = [
    { path: '', component: productos_component_1.ProductosComponent },
    { path: 'productos', component: productos_component_1.ProductosComponent },
    { path: 'crear-producto', component: create_component_1.CreateComponent },
    { path: 'producto/:id', component: detail_component_1.DetailComponent },
    { path: 'editar-producto/:id', component: edit_component_1.EditComponent },
    { path: '**', component: error_component_1.ErrorComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
