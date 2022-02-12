import { HomePageComponent } from './pages/home-page/home-page.component';
import { CaseEditComponent } from './pages/case-edit/case-edit.component';
import { CaseDetailsComponent } from './pages/case-details/case-details.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasePageComponent } from './pages/case-page/case-page.component';

const routes: Routes = [
  {
    path: 'case',
    component: CasePageComponent,
    children: [
      {
        path: 'edit/:id',
        component: CaseEditComponent,
        //  resolve: { pet: PetResolverService }
      },
      {
        path: 'edit',
        component: CaseEditComponent,
        //  resolve: { pet: PetResolverService }
      },
    ],
  },
  {
    path: 'case/:id',
    component: CaseDetailsComponent,
    //  resolve: { pet: PetResolverService }, canActivate: [AuthGuard]
  },
  { path: '', component: StatisticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
