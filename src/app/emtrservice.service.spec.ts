import { TestBed, inject } from '@angular/core/testing';

import { EmtrserviceService } from './emtrservice.service';

describe('EmtrserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmtrserviceService]
    });
  });

  it('should be created', inject([EmtrserviceService], (service: EmtrserviceService) => {
    expect(service).toBeTruthy();
  }));
});
