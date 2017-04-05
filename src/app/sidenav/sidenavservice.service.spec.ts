/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SidenavserviceService } from './sidenavservice.service';

describe('SidenavserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidenavserviceService]
    });
  });

  it('should ...', inject([SidenavserviceService], (service: SidenavserviceService) => {
    expect(service).toBeTruthy();
  }));
});
