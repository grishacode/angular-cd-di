import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../../../../core/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../../core/models/post.model';
import { Subject, takeUntil } from 'rxjs';
import { CountPostsService } from '../../../../core/services/count-posts.service';

@Component({
  selector: 'app-user-details-post',
  templateUrl: './user-posts-details.component.html',
  styleUrls: ['./user-posts-details.component.scss'],
  // One option to apply a service in a component is to provide it directly in the component, meaning you can use that service within that component.
  providers: [CountPostsService],
})
export class UserPostsDetailsComponent implements OnInit, OnDestroy {
  public posts: Post[];
  public displayedColumns: string[] = ['id', 'title', 'body'];
  public showCountPosts: number;

  private currentId: number;
  private destroy$ = new Subject<boolean>();

  constructor(
    private readonly postsService: PostsService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly countPosts: CountPostsService,
  ) {}

  public ngOnInit(): void {
    this.currentId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.loadPostByUserId();
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private loadPostByUserId(): void {
    this.postsService
      .getPosts(this.currentId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((posts) => {
        this.posts = posts;
        this.showCountPosts = this.countPosts.receiveCountPosts(posts);
      });
  }
}
