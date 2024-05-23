import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { User, UserSearchService } from 'user-data-access';
import { DashboardComponent } from './Dashboard.component';

describe(DashboardComponent.name, () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let router: Router;
  let userDataAccess: UserSearchService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DashboardComponent,
        MatTableModule,
        MatPaginatorModule,
        NoopAnimationsModule,
        HttpClientModule,
        RouterTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    userDataAccess = TestBed.inject(UserSearchService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate ', () => {
    jest.spyOn(router, 'navigate');

    const user: User = {
      createdAt: 'string',
      name: 'string',
      avatar: 'string',
      email: 'string',
      biography: 'string',
      id: 'string',
      employeeID: 'string',
      age: 'string',
      ocupation: 'string',
    };

    const navigationExtras = {
      state: {
        data: user,
      },
    };
    component.accessDetails(user);

    expect(router.navigate).toHaveBeenCalledWith(['/users'], navigationExtras);
  });

  it('should call search user ', () => {
    jest.spyOn(component, 'searchUser');
    component.ngOnInit();
    expect(component.searchUser).toHaveBeenCalled();
  });

  it('should search user ', () => {
    const periodic: User = {
      id: 'string',
      name: 'string',
      email: 'string',
      biography: 'string',
      createdAt: 'string',
      avatar: 'string',
    };
    jest.spyOn(userDataAccess, 'getUsers').mockReturnValue(of([periodic]));

    component.searchUser();

    //expect(component.dataSource.data[0]).toBe(periodic);
    expect(component.numberUser).toBe(1);
  });
});
