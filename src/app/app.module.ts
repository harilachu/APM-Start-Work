import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    ProductModule,
    AppRoutingModule,
  ],
  exports: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
