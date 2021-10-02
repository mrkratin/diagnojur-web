import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationReplyComponent } from './solicitation-reply.component';

describe('SolicitationReplyComponent', () => {
  let component: SolicitationReplyComponent;
  let fixture: ComponentFixture<SolicitationReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitationReplyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
