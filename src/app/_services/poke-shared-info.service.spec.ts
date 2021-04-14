import { TestBed } from '@angular/core/testing';

import { PokeSharedInfoService } from './poke-shared-info.service';

describe('PokeSharedInfoService', () => {
  let service: PokeSharedInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeSharedInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
