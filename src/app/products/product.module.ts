import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
  ],
  imports: [
    SharedModule,
    ProductRoutingModule,
  ]
})
export class ProductModule { }
