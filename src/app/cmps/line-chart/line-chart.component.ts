import { ChartDataModule } from './../../models/chart-data/chart-data.module';
import { lastValueFrom } from 'rxjs';
import { CovidService } from './../../services/covid.service';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit, OnChanges {
  data = [];
  chartOption: EChartsOption = {};
  @Input() chartDates;
  @Input() chartLine1;
  @Input() chartLine2;
  @Input() chartLine3;

  constructor(private covidService: CovidService) {}
  ngOnInit(): void {
    this.LoadChart();
  }
  ngOnChanges(changes: SimpleChanges) {
    this.LoadChart();
  }
  LoadChart() {
    this.chartOption = {
      legend: {
        data: ['Cases', 'Deaths', 'Tests'],
        align: 'left',
      },
      tooltip: {
        trigger: 'item',
        formatter: '',
      },
      xAxis: {
        type: 'category',
        data: this.chartDates,
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: function (value) {
            if (value < 1000000) return value / 1000 + 'K';
            else return value / 1000000 + 'M';
          },
        },
      },
      series: [
        {
          name: 'Cases',
          data: this.chartLine1,
          type: 'line',
          animationDelay: (idx) => idx * 10,
        },
        {
          name: 'Deaths',
          data: this.chartLine2,
          type: 'line',
          animationDelay: (idx) => idx * 10,
        },
        {
          name: 'Tests',
          data: this.chartLine3,
          type: 'line',
          animationDelay: (idx) => idx * 10,
        },
      ],
    };
  }
}
