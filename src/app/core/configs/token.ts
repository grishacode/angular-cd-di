import { environment } from '../../../environments/environment';
import { InjectionToken } from '@angular/core';

// Created a token that we can reuse anywhere.

export const BASE_URL = new InjectionToken<string>('BASE_URL', {
  providedIn: 'root',
  factory: () => environment.url,
});
