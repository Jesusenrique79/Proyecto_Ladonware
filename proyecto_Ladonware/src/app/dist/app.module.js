"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var productos_component_1 = require("./components/productos/productos.component");
var create_component_1 = require("./components/create/create.component");
var error_component_1 = require("./components/error/error.component");
var detail_component_1 = require("./components/detail/detail.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                productos_component_1.ProductosComponent,
                create_component_1.CreateComponent,
                error_component_1.ErrorComponent,
                detail_component_1.DetailComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.routing,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [
                app_routing_1.appRoutingProviders
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
