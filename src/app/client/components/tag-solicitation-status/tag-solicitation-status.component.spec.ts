import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSolicitationStatusComponent } from './tag-solicitation-status.component';

describe('TagSolicitationStatusComponent', () => {
  let component: TagSolicitationStatusComponent;
  let fixture: ComponentFixture<TagSolicitationStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TagSolicitationStatusComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagSolicitationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
