import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Options } from 'highcharts';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ActivityChartOptions } from './activity-chart-options'

@Component({
  selector: 'station-activity',
  templateUrl: './station-activity.component.html',
  styleUrls: ['./station-activity.component.scss']
})
export class StationActivityComponent implements OnInit, OnDestroy {
  subscriptions : Subscription = new Subscription();
  
  @Input() options: BehaviorSubject<Options> = new BehaviorSubject(ActivityChartOptions);
  public chart : Chart;
  constructor() {
    console.log("I am submodule");
  }
  /*
    Init activity chart and subscribe to changes of the chart options.
  */
  ngOnInit(): void {
    //replace standard options with input options if any
    this.chart = new Chart({...ActivityChartOptions, ...this.options.value});
    this.subscriptions.add(this.options.subscribe(
      (options: Options) => {
        this.updateChartOptions(options);
      }
    ));
  }
  /*
    Unsubscribe all subscriptions on component destroy
  */
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private updateChartOptions(options: Options): void {
    this.chart = new Chart({...ActivityChartOptions, ...options});
  }

}
