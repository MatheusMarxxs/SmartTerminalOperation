import { TestBed } from '@angular/core/testing';

import { ImpactoService } from './impacto.service';

describe('ImpactoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImpactoService = TestBed.get(ImpactoService);
    expect(service).toBeTruthy();
  });
});
