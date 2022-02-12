import { Component, OnInit, Input } from '@angular/core';
import { ThemeOption } from 'ngx-echarts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  theme: string | ThemeOption;
  @Input() worldData;
  options: {};
  total: 0;
  constructor() {}

  ngOnInit(): void {
    this.total = this.worldData.reduce((acc, obj) => {
      return acc + obj.value;
    }, 0);

    this.options = {
      title: {
        // text: 'Cases World Wide',
        text: `Total Cases: ${this.total}`,
        // subtext: `Total Cases: ${this.total}`,
        x: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        x: 'center',
        y: 'bottom',
        data: ['Recovered Cases', 'Active Cases', 'Deaths'],
      },
      calculable: true,
      series: [
        {
          name: '',
          type: 'pie',
          radius: [30, 110],
          data: this.worldData,
        },
      ],
    };
  }
}
