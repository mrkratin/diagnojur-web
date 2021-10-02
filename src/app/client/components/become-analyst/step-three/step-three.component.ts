import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dj-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent implements OnInit {
  @Output()
  sendLockFinish: EventEmitter<boolean> = new EventEmitter();
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.sendLockFinish.emit(true);
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      accept: [false, [Validators.requiredTrue]]
    });
    this.formGroup.valueChanges.subscribe(value => this.sendLockFinish.emit(!value.accept));
  }
}
