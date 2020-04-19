import { TestBed } from '@angular/core/testing';

import { CovidStatsService } from './covid-stats.service';

describe('CovidStatsService', () => {
  let service: CovidStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
