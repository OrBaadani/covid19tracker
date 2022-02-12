import { Case } from '../../models/case.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-case-preview',
  templateUrl: './case-preview.component.html',
  styleUrls: ['./case-preview.component.scss'],
})
export class CasePreviewComponent implements OnInit {
  @Input() case: Case;
  @Output() onRemove = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
}
