import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User, UserSearchService } from 'user-data-access';

@Component({
  selector: 'lib-dashboard',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatCardModule],
  templateUrl: './Dashboard.component.html',
  styleUrl: './Dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  numberUser: number = 0;
  displayedColumns: string[] = ['id', 'avatar', 'name', 'email', 'biography'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  user$!: Observable<User[]>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  router = inject(Router);
  userDataAccess = inject(UserSearchService);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.searchUser();
  }

  searchUser() {
    this.user$ = this.userDataAccess.getUsers();
    this.user$.subscribe((usersArray) => {
      this.numberUser = usersArray.length;
    });
  }

  accessDetails(row: User) {
    const navigationExtras: NavigationExtras = {
      state: {
        data: row,
      },
    };

    this.router.navigate(['/users'], navigationExtras);
  }
}

export interface PeriodicElement {
  id?: string;
  name: string;
  email: string;
  biography: string;
  createdAt?: string;
  avatar?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
