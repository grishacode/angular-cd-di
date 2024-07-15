import { Component } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  public users = this.userService.getUsers();

  public displayedColumns: string[] = ['name', 'username', 'phone', 'website', 'actions'];
  constructor(private readonly userService: UserService) {}
}
