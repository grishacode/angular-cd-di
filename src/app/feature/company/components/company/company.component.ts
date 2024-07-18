import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Company } from '../../../../core/models/company.model';
import { SnackbarService } from '../../../../core/models/snackbar.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  viewProviders: [SnackbarService],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CompanyComponent {
  public company: Company = {
    name: 'Taras',
    city: 'Kiev',
  };

  public createCompany(): void {
    // Create a new link in our object that detects changes in our child component using the OnPush strategy.
    this.company = { name: this.company.name, city: this.company.city };
  }

  public updateCompany(company: Company): void {
    this.company = company;
  }
}
