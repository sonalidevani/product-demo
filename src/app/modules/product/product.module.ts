import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { ProductLayoutComponent } from './product-layout/product-layout.component';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    ProductLayoutComponent,
    ProductAddEditComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
