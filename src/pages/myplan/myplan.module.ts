import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyplanPage } from './myplan';

@NgModule({
  declarations: [
    MyplanPage,
  ],
  imports: [
    IonicPageModule.forChild(MyplanPage),
  ],
})
export class MyplanPageModule {}
