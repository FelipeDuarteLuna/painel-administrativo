import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutModule } from 'modules/layout';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, LayoutModule, HttpClientTestingModule],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  });

  it(`${AppComponent.prototype.title} - Should contain header.`, () => {
    const header: HTMLHeadingElement =
      fixture.nativeElement.querySelector('header');
    expect(header).toBeTruthy();
  });
});
