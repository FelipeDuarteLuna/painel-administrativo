import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UserCardComponent } from 'user-ui';
import { UserDetailComponent } from './user-detail.component';

const mockNavigationExtra = {
  lastSuccessfulNavigation: {
    extras: {
      state: {
        get: () => ({
          data: {
            createdAt: 'string',
            name: 'string',
            avatar: 'string',
            email: 'string',
            biography: 'string',
            id: 'string',
            employeeID: 'string',
            age: 'string',
            ocupation: 'string',
          },
        }),
      },
    },
  },
};

describe(UserDetailComponent.name, () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;
  let route: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailComponent, UserCardComponent],
      providers: [{ provide: Router, useValue: mockNavigationExtra }],
    });

    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    route = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should have data on last SucessfullNavigation', () => {
    component.ngOnInit();
    route.navigate([`/user`]);
    expect(component.userData.name).toBe('string');
  });
});
