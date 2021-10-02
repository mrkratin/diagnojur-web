import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationReplyAnswerComponent } from './solicitation-reply-answer.component';

describe('SolicitationReplyAnswerComponent', () => {
  let component: SolicitationReplyAnswerComponent;
  let fixture: ComponentFixture<SolicitationReplyAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitationReplyAnswerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationReplyAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
