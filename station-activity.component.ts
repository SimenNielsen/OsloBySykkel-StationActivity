import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ActivityChartOptions } from '../activity-chart-options'

@Component({
  selector: 'app-station-activity',
  templateUrl: './station-activity.component.html',
  styleUrls: ['./station-activity.component.scss']
})
export class StationActivityComponent implements OnInit {
  @Input() chart: any;
  constructor() { }

  ngOnInit(): void {
  }

}
