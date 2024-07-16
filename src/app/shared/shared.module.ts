import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from './modules/angular-material/angular-material.module';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [AngularMaterialModule, CommonModule, RouterModule],
  exports: [AngularMaterialModule, NavBarComponent, FormsModule, ReactiveFormsModule, CommonModule],
  declarations: [NavBarComponent],
})
export class SharedModule {}
