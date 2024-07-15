import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Country } from '../../../../core/models/country.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CompanyComponent {
  public company: Country = {
    name: 'Taras',
    city: 'Kiev',
  };

  public createCompany(): void {
    this.company = { name: this.company.name, city: this.company.city };
  }
}
