import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { User } from 'user-data-access';

@Component({
  selector: 'lib-user-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, MatButtonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  router = inject(Router);
  @Input() user!: User | null;

  backHome() {
    this.router.navigate(['./dashboard']);
  }

  underContruction() {
    alert('Opss! Under Construction');
  }
}
