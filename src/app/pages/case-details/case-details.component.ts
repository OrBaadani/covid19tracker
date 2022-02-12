import { lastValueFrom, Subscription } from 'rxjs';
import { CaseService } from './../../services/case.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Case } from 'src/app/models/case.model';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.scss'],
})
export class CaseDetailsComponent implements OnInit {
  covidCase: Case;
  // subscription: Subscription;

  constructor(
    private caseService: CaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): Promise<void> {
    this.route.params.subscribe(async (params) => {
      const covidCase$ = this.caseService.getCaseById(params.id);
      const covidCase = await lastValueFrom(covidCase$);
      this.covidCase = covidCase;
    });
    return null;
  }
  onBack() {
    this.router.navigateByUrl('case');
  }
}
