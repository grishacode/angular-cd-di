import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { BASE_URL } from '../configs/token';

// The injectable with the provideIn: 'root' option makes this service a singleton, meaning that you can access this service from anywhere.

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    @Inject(BASE_URL) private readonly url: string,
    private readonly http: HttpClient,
  ) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users?_limit=20`);
  }
}
