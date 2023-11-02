// app.component.ts
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,

    plugins: {
      datalabels: {
        color: 'white',
        display: true,
        align: 'center',
        anchor: 'center',
        formatter: (value, ctx) => value + ' %',
      },
    },
  };
  public barChartLabels: Label[] = ['merkez', 'kemer', 'alanya', 'hidayet'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public colors = [
    { backgroundColor: 'red', borderColor: 'black', borderWidth: 2 },
    { backgroundColor: 'green', borderColor: 'black', borderWidth: 2 },
  ];

  public barChartData: ChartDataSets[] = [
    {
      data: [40.2, 60, 30, 10],
      label: 'dolu',
      stack: 'a',
    },
    {
      data: [59.8, 40, 70, 90],
      label: 'boş',
      stack: 'a',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
