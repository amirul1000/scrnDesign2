import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorktodayPage } from './worktoday';

@NgModule({
  declarations: [
    WorktodayPage,
  ],
  imports: [
    IonicPageModule.forChild(WorktodayPage),
  ],
})
export class WorktodayPageModule {}
