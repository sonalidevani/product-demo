import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
import { ProductLayoutComponent } from './product-layout/product-layout.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
    {
        path: '', component: ProductLayoutComponent,
        children: [
            { path: '', component: ProductListComponent },
            { path: 'add', component: ProductAddEditComponent },
            { path: 'edit/:id', component: ProductAddEditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }