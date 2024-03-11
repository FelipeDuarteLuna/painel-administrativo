import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { User, UserSearchService } from 'user-data-access';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-dashboard',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatCardModule],
  templateUrl: './Dashboard.component.html',
  styleUrl: './Dashboard.component.scss',
})
export class DashboardComponent implements AfterViewInit {
  numberUser: number = 0;
  displayedColumns: string[] = ['id', 'name', 'email', 'biography'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  router = inject(Router);
  userDataAccess = inject(UserSearchService);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.searchUser();
  }

  searchUser() {
    this.userDataAccess.getUsers().subscribe((data: PeriodicElement[]) => {
      // Atualize ELEMENT_DATA com os dados da API
      ELEMENT_DATA = data;
      this.dataSource.data = ELEMENT_DATA;

      // Atualiza o número de usuários com base no tamanho do array retornado pela API
      this.numberUser = data.length;
    });
  }

  accessDetails(row: User) {
    this.router.navigate(['/users', row.id]);

    // eslint-disable-next-line no-console
    console.log(row);
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

let ELEMENT_DATA: PeriodicElement[] = [];
