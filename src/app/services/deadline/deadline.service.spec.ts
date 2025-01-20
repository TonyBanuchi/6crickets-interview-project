import { TestBed } from '@angular/core/testing';

import { DeadlineService } from './deadline.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import tempDataService from '../../../tempData/tempDataService';
import { provideHttpClient } from '@angular/common/http';

describe('DeadlineService', () => {
  let service: DeadlineService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), DeadlineService]
    });
    service = TestBed.inject(DeadlineService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request', () => {
    service.getDeadline(1).subscribe(data => {
      console.log(data);
    });
  
    // Expect a GET request to a specific URL
    const req = httpTestingController.expectOne('https://backend/server/api-endpoint/deadline?id=1');
    expect(req.request.method).toEqual('GET');
  
    // Respond with mock data
    req.flush([tempDataService.deadlines[0]]);
  });

  afterEach(()=>{
    httpTestingController.verify();
  });
});
