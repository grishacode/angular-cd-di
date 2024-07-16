import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserPostsDetailsComponent } from './components/user-posts-details/user-posts-details.component';
import { PostsService } from '../../core/services/posts.service';

@NgModule({
  declarations: [UserListComponent, UserPostsDetailsComponent],
  imports: [DashboardRoutingModule, SharedModule],

  // When you apply the service in a module, it gives that module the ability to use the service.
  providers: [PostsService],
})
export class DashboardModule {}
