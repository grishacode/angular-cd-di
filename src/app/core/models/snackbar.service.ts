import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackbarService {
  constructor(private readonly matSnackBar: MatSnackBar) {}

  public showSnackBar(value: string): void {
    this.matSnackBar.open(value, '');
  }
}
