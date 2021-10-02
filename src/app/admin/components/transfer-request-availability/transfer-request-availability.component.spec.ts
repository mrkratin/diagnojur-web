import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferRequestAvailabilityComponent } from './transfer-request-availability.component';

describe('TransferRequestAvailabilityComponent', () => {
  let component: TransferRequestAvailabilityComponent;
  let fixture: ComponentFixture<TransferRequestAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransferRequestAvailabilityComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferRequestAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
