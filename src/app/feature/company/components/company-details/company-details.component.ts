import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from '../../../../core/models/country.model';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyDetailsComponent {
  @Input() company: Country;
}
