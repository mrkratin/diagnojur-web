import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { DiagnosticImportantInfoComponent } from './diagnostic-important-info.component';

describe('DiagnosticImportantInfoComponent', () => {
  let component: DiagnosticImportantInfoComponent;
  let fixture: ComponentFixture<DiagnosticImportantInfoComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosticImportantInfoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DiagnosticImportantInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
