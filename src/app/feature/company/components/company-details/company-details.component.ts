import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Company } from '../../../../core/models/company.model';
import { SnackbarService } from '../../../../core/models/snackbar.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyDetailsComponent {
  @Input() set company(company: Company) {
    this.newCompany = { name: company.name, city: company.city };
  }
  @Output() changedCompany = new EventEmitter();
  public newCompany: Company;

  constructor(private readonly snackbarService: SnackbarService) {
    // This is a simple example that shows how we can use view providers.
    this.snackbarService.showSnackBar('Hello DI');
  }

  public updateCompany(): void {
    this.changedCompany.emit(this.newCompany);
  }
}
