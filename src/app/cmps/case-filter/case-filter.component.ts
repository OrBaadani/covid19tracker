import { CaseFilter } from './../../models/case-filter/case-filter.module';
import { CaseService } from './../../services/case.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-case-filter',
  templateUrl: './case-filter.component.html',
  styleUrls: ['./case-filter.component.scss'],
})
export class CaseFilterComponent implements OnInit {
  filterBy: CaseFilter;
  @Output() onSetFilter = new EventEmitter<Object>();

  constructor() {}

  ngOnInit(): void {
    this.filterBy = { term: '' };
  }

  // onSetFilter() {
  //   // this.caseService.setFilter({ ...this.filterBy });

  // }
}
