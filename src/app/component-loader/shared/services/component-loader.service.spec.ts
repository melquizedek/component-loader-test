import { TestBed, inject } from '@angular/core/testing';

import { ComponentLoaderService } from './component-loader.service';

describe('ComponentLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentLoaderService]
    });
  });

  it('should be created', inject([ComponentLoaderService], (service: ComponentLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
