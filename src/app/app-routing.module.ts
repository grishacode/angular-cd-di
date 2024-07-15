import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'dashboard',
    loadChildren: () => import('./feature/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'company',
    loadChildren: () => import('./feature/company/company.module').then((m) => m.CompanyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
