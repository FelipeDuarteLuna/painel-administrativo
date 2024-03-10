import { mockUser } from './../../mocks/user.mock';
import { TestBed } from '@angular/core/testing';
import { UserSearchService } from './user-search.service';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../models/user.model';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('UserSearchService', () => {
  let service: UserSearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(UserSearchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Products correctly', () => {
    const url = 'https://65009f9718c34dee0cd53786.mockapi.io/users';
    let result: User[] = [];

    service.getUsers().subscribe((products) => (result = products));

    const request = httpMock.expectOne(url);
    request.flush(mockUser);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(mockUser);
  });
});
