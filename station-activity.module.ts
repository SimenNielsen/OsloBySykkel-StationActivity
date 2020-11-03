import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationActivityComponent } from './station-activity.component';
import { ChartModule } from 'angular-highcharts';



@NgModule({
  declarations: [
    StationActivityComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
  ],
  exports: [
    StationActivityComponent
  ]
})
export class StationActivityModule { }
