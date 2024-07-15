import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private readonly http: HttpClient) {}

  public getPosts(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/users/${id}/posts`);
  }
}
