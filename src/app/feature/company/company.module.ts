import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './components/company/company.component';
import { SharedModule } from '../../shared/shared.module';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';

@NgModule({
  declarations: [CompanyComponent, CompanyDetailsComponent],
  imports: [CommonModule, CompanyRoutingModule, SharedModule],
})
export class CompanyModule {}
