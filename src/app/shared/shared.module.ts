import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [AngularMaterialModule, NavBarComponent, FormsModule, ReactiveFormsModule],
  imports: [AngularMaterialModule, CommonModule, RouterLink, RouterLinkActive],
  declarations: [NavBarComponent],
})
export class SharedModule {}
