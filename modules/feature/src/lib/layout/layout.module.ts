import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, RouterModule, MatIconModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class LayoutModule {}
