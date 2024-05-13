import { TestBed } from '@angular/core/testing';

import { ClientsInfoService } from './clients-info.service';

describe('ClientsInfoService', () => {
  let service: ClientsInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
