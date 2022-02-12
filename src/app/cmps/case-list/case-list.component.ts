import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Case } from '../../models/case.model';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss'],
})
export class CaseListComponent implements OnInit {
  @Input() cases: Case[];
  @Output() onRemove = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
