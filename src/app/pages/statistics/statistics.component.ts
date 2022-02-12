import { ChartDataModule } from './../../models/chart-data/chart-data.module';
import { Observable, lastValueFrom } from 'rxjs';
import { CovidService } from './../../services/covid.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  lineChartData: Number[] = null;
  chartLine2: String[] = null;
  chartLine1: String[] = null;
  chartLine3: String[] = null;
  chartDates: String[] = null;
  country: string = 'isr';
  countries = [];
  countryData = null;
  worldDataChart = [];
  worldData = null;

  constructor(private covidService: CovidService) {}
  async ngOnInit(): Promise<void> {
    const names = await lastValueFrom(this.covidService.getData3());
    this.countries = names.map((val) => {
      return { code: val.ThreeLetterSymbol, name: val.Country };
    });

    this.startRequest();
    this.requestWorldData();
  }
  async startRequest(): Promise<void> {
    this.countryData = await lastValueFrom(
      this.covidService.getGlobalData(this.country)
    );
    const data = await lastValueFrom(this.covidService.getData(this.country));
    data.sort(
      (b, a) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    this.chartDates = data.map((val) => val.date);
    this.chartLine1 = data.map((val) => val['total_cases']);
    this.chartLine2 = data.map((val) => val['total_deaths']);
    this.chartLine3 = data.map((val) => val['total_tests']);
  }

  async requestWorldData() {
    // this.covidService.getData('can').subscribe((res) => console.log(res));
    const data = await lastValueFrom(this.covidService.getDataGlobal());
    this.worldData = data[0];
    this.worldDataChart = [
      { value: +data[0].TotalRecovered, name: 'Recovered Cases' },
      { value: data[0].ActiveCases, name: 'Active Cases' },
      { value: data[0].TotalDeaths, name: 'Deaths' },
    ];

    console.log(this.worldData);
    this.covidService.getDataGlobal().subscribe((res) => console.log(res));
  }
}
