import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import {MaterialModule} from '../../material.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ThemePickerModule} from './theme-picker/theme-picker.module';



@NgModule({
  declarations: [ToolbarComponent],
  exports: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ThemePickerModule
  ]
})
export class ToolbarModule { }
