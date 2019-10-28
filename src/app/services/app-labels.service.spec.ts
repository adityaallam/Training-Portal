import { TestBed } from '@angular/core/testing';

import { AppLabelsService } from './app-labels.service';

describe('AppLabelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppLabelsService = TestBed.get(AppLabelsService);
    expect(service).toBeTruthy();
  });
});
