import { environment } from '../../../environments/environment';
import { InjectionToken } from '@angular/core';

// Created token which we can reuse in any place.

export const BASE_URL = new InjectionToken<string>('BASE_URL', {
  providedIn: 'root',
  factory: () => environment.url,
});
