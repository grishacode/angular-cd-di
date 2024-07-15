import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable()
export class CountPostsService {
  public receiveCountPosts(posts: Post[]): number {
    return posts.length;
  }
}
