import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UserCardComponent } from './user-card.component';

describe(UserCardComponent.name, () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    const header: HTMLHeadingElement =
      fixture.nativeElement.querySelector('h2');
    expect(header.textContent).toContain('User Details');
  });

  xit('should show alert clicking editar button', () => {
    const alertSpy = (window.alert = jest.fn());

    const userCard: HTMLButtonElement =
      fixture.nativeElement.querySelector('.editar');

    userCard?.dispatchEvent(new Event('click'));

    expect(alertSpy).toHaveBeenCalledWith('Opss! Under Construction');
  });
  xit('should navigate to user details when clicking voltar button', () => {
    const navigateSpy = jest.spyOn(router, 'navigate');

    const userCard: HTMLButtonElement =
      fixture.nativeElement.querySelector('.voltar');

    userCard?.dispatchEvent(new Event('click'));

    expect(navigateSpy).toHaveBeenCalledWith(['./dashboard']);
  });
});
