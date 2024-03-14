import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

const mockTitle = 'Envelope Azul';

describe(HeaderComponent.name, () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatIconModule, MatToolbarModule],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.title = mockTitle;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${HeaderComponent.name} - should have as title.`, () => {
    const header: HTMLHeadingElement =
      fixture.nativeElement.querySelector('h1');
    expect(header.textContent).toEqual(mockTitle);

    component.title = 'JAS';
    fixture.detectChanges();
    expect(header.textContent).not.toEqual(mockTitle);
  });
  it(`${HeaderComponent.name} - should have an person icon.`, () => {
    const header: HTMLHeadingElement = fixture.nativeElement.querySelector(
      '.header__title-icon'
    );
    expect(header.textContent).toContain('person');
  });
});
