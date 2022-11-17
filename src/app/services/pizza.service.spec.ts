/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PizzaService } from './pizza.service';

describe('Service: Pizza', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaService]
    });
  });

  it('should ...', inject([PizzaService], (service: PizzaService) => {
    expect(service).toBeTruthy();
  }));
});
