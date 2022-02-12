import { lastValueFrom } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { CaseService } from './../../services/case.service';
import { Component, OnInit } from '@angular/core';
import { Case } from 'src/app/models/case.model';

@Component({
  selector: 'app-case-edit',
  templateUrl: './case-edit.component.html',
  styleUrls: ['./case-edit.component.scss'],
})
export class CaseEditComponent implements OnInit {
  case: Case;

  constructor(
    private caseService: CaseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('params', this.route.params);
    this.route.params.subscribe(async ({ id }) => {
      this.case = id
        ? await lastValueFrom(this.caseService.getCaseById(id))
        : (this.caseService.getEmptyCase() as Case);
    });
    // console.log(this.case);
  }
  async onSaveCase() {
    await lastValueFrom(this.caseService.saveCase(this.case));
    this.router.navigateByUrl('case');
  }
  closeModal(ev) {
    ev.preventDefault;
    this.router.navigateByUrl('case');
  }
}
