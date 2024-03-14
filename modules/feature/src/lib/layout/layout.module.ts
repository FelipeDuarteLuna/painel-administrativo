import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatIconModule, HeaderComponent],
  declarations: [],
  exports: [HeaderComponent],
})
export class LayoutModule {}
