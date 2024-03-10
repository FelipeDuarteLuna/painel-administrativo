import { UserSearchService } from './../../../../../data-access/user/src/lib/services/user-search/user-search.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'lib-dashboard',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatCardModule],
  templateUrl: './Dashboard.component.html',
  styleUrl: './Dashboard.component.scss',
})
export class DashboardComponent implements AfterViewInit {
  displayedColumns: string[] = ['ID', 'name', 'email', 'Biography'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userDataAccess: UserSearchService) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.searchUser();
  }

  searchUser() {
    const dados = this.userDataAccess.getUsers().subscribe((success) => {
      // eslint-disable-next-line no-console
      console.log(success);
      // eslint-disable-next-line no-console
      console.log(dados);
    });
  }
}

export interface PeriodicElement {
  name: string;
  ID: number;
  email: number;
  Biography: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { ID: 1, name: 'Hydrogen', email: 1.0079, Biography: 'H' },
  { ID: 2, name: 'Helium', email: 4.0026, Biography: 'He' },
  { ID: 3, name: 'Lithium', email: 6.941, Biography: 'Li' },
  { ID: 3, name: 'Lithium', email: 6.941, Biography: 'Li' },
  { ID: 4, name: 'Beryllium', email: 9.0122, Biography: 'Be' },
  { ID: 5, name: 'Boron', email: 10.811, Biography: 'B' },
  { ID: 6, name: 'Carbon', email: 12.0107, Biography: 'C' },
  { ID: 7, name: 'Nitrogen', email: 14.0067, Biography: 'N' },
  { ID: 8, name: 'Oxygen', email: 15.9994, Biography: 'O' },
  { ID: 9, name: 'Fluorine', email: 18.9984, Biography: 'F' },
  { ID: 10, name: 'Neon', email: 20.1797, Biography: 'Ne' },
  { ID: 11, name: 'Sodium', email: 22.9897, Biography: 'Na' },
  { ID: 12, name: 'Magnesium', email: 24.305, Biography: 'Mg' },
  { ID: 13, name: 'Aluminum', email: 26.9815, Biography: 'Al' },
  { ID: 14, name: 'Silicon', email: 28.0855, Biography: 'Si' },
  { ID: 15, name: 'Phosphorus', email: 30.9738, Biography: 'P' },
  { ID: 16, name: 'Sulfur', email: 32.065, Biography: 'S' },
  { ID: 17, name: 'Chlorine', email: 35.453, Biography: 'Cl' },
  { ID: 18, name: 'Argon', email: 39.948, Biography: 'Ar' },
  { ID: 19, name: 'Potassium', email: 39.0983, Biography: 'K' },
  { ID: 20, name: 'Calcium', email: 40.078, Biography: 'Ca' },
];
