import { TestBed } from '@angular/core/testing';

import { FeedbackservService } from './feedbackserv.service';

describe('FeedbackservService', () => {
  let service: FeedbackservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
