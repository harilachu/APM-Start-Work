import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WelcomeComponent } from './home/welcome.component';

const routes: Routes = [
  {  path: 'products', component: ProductListComponent },
  {  path: 'products/:id', component: ProductDetailsComponent },
  {  path: 'welcome', component: WelcomeComponent },
  {  path: '', redirectTo:'welcome', pathMatch:'full' },
  {  path: '**', redirectTo:'welcome', pathMatch:'full' },
  // {  path: '**', component: PageNotFoundComponent },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
