import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import {FlexModule} from '@angular/flex-layout';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    FlexModule
  ]
})
export class AboutModule { }
