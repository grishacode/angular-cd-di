import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserPostsDetailsComponent } from './components/user-posts-details/user-posts-details.component';
import { PostsService } from '../../core/services/posts.service';

@NgModule({
  declarations: [UserListComponent, UserPostsDetailsComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
  providers: [PostsService],
})
export class DashboardModule {}
