import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailGuard } from './product/product-details/product-detail.guard';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

const routes: Routes = [
  {  path: 'products', component: ProductListComponent },
  {  path: 'products/:id', canActivate:[ProductDetailGuard], component: ProductDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ProductRoutingModule { }
