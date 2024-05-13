import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService); // Use TestBed to create an instance
  });

  it('should create an instance', () => {
    //expect(new AppService()).toBeTruthy();
    expect(service).toBeTruthy();
  });
});
