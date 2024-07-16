import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { Inject, Injectable } from '@angular/core';
import { BASE_URL } from '../configs/token';

// In that case, we need to manually apply the service to the module or component.

@Injectable()
export class PostsService {
  constructor(
    @Inject(BASE_URL) private readonly url: string,
    private readonly http: HttpClient,
  ) {}

  public getPosts(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/users/${id}/posts`);
  }
}
