import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'user-data-access';

import { UserCardComponent } from 'user-ui';

@Component({
  selector: 'lib-user-detail',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent implements OnInit {
  router = inject(Router);
  userData!: User;

  ngOnInit(): void {
    const currentState = this.router.lastSuccessfulNavigation;
    this.userData = currentState?.extras?.state?.['data'] as User;
  }
}
