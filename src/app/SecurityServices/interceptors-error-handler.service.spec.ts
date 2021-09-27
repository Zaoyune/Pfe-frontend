import { TestBed } from '@angular/core/testing';

import { InterceptorsErrorHandlerService } from './interceptors-error-handler.service';

describe('InterceptorsErrorHandlerService', () => {
  let service: InterceptorsErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorsErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
