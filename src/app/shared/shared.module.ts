import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConvertToSpacesPipe } from '../convert-to-spaces.pipe';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConvertToSpacesPipe,
    StarComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports:[
    BrowserModule,
    FormsModule,
    ConvertToSpacesPipe,
    StarComponent
  ]
})
export class SharedModule { }
