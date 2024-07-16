import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

// In that case, we need to manually apply the service to the module or component.

@Injectable()
export class CountPostsService {
  public receiveCountPosts(posts: Post[]): number {
    return posts.length;
  }
}
