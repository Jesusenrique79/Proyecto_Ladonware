import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosComponent } from './components/productos/productos.component';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [

    { path: '', component: ProductosComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'crear-producto', component: CreateComponent },
    { path: 'producto/:id', component: DetailComponent },
    {path: 'editar-producto/:id', component: EditComponent},
    { path: '**', component: ErrorComponent }

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);