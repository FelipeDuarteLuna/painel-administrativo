import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { UserSearchService } from '../../../../../data-access/user/src/lib/services/user-search/user-search.service';

@Component({
  selector: 'lib-dashboard',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatCardModule],
  templateUrl: './Dashboard.component.html',
  styleUrl: './Dashboard.component.scss',
})
export class DashboardComponent implements AfterViewInit {
  numberUser: number = 0;
  displayedColumns: string[] = ['id', 'avatar', 'name', 'email', 'biography'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userDataAccess: UserSearchService) {}

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

  rosadaDev() {
    alert('Informa a Rota da sua Page.');
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
