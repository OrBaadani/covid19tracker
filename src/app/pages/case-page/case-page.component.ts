import { CaseFilter } from './../../models/case-filter/case-filter.module';
import { CovidService } from '../../services/covid.service';
import { CaseService } from './../../services/case.service';
import { Observable, Subscription } from 'rxjs';
import { Case } from './../../models/case.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-page',
  templateUrl: './case-page.component.html',
  styleUrls: ['./case-page.component.scss'],
})
export class CasePageComponent implements OnInit {
  cases: Case[];
  cases$: Observable<Case[]>;
  subscription: Subscription;

  msg = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise Resolved!');
    }, 1000);
  });

  constructor(
    private caseService: CaseService,
    private covidService: CovidService
  ) {}

  ngOnInit(): void {
    this.caseService.loadCases();
    this.cases$ = this.caseService.cases$;
  }
  onRemoveCase(caseId: string) {
    this.caseService.deleteCase(caseId);
  }
  onFilter(filterBy: CaseFilter) {
    this.caseService.loadCases(filterBy);
    this.cases$ = this.caseService.cases$;
  }
}
