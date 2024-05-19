import { TestBed } from '@angular/core/testing';

import { LocalCasasService } from './local-casas.service';

describe('LocalCasasService', () => {
  let service: LocalCasasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalCasasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
