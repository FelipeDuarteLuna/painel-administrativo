import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from 'user-ui';

@Component({
  selector: 'lib-user-detail',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent {}
