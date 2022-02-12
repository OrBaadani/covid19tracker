import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasePageComponent } from './pages/case-page/case-page.component';
import { CaseDetailsComponent } from './pages/case-details/case-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CasePreviewComponent } from './cmps/case-preview/case-preview.component';
import { CaseListComponent } from './cmps/case-list/case-list.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './cmps/header/header.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { CaseEditComponent } from './pages/case-edit/case-edit.component';
import { LineChartComponent } from './cmps/line-chart/line-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { CaseFilterComponent } from './cmps/case-filter/case-filter.component';
import { PieChartComponent } from './cmps/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CasePageComponent,
    CaseDetailsComponent,
    HomePageComponent,
    CasePreviewComponent,
    CaseListComponent,
    HeaderComponent,
    StatisticsComponent,
    CaseEditComponent,
    LineChartComponent,
    CaseFilterComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
