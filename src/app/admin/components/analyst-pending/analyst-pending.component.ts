import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SmallAnalyst } from '../../models';
import { Direction, Page } from '../../../shared/models';
import { AnalystService } from '../../services';
import { DateMomentPipeType } from '../../../shared/pipes';

@Component({
  selector: 'dj-analyst-pending',
  templateUrl: './analyst-pending.component.html',
  styleUrls: ['./analyst-pending.component.css']
})
export class AnalystPendingComponent implements OnInit {
  isLoading = false;
  analysts: Page<SmallAnalyst>;
  formGroup: FormGroup;
  directions: Direction[] = [Direction.DESC, Direction.ASC];
  readonly fromNow: DateMomentPipeType = DateMomentPipeType.FROM_NOW;

  constructor(private service: AnalystService, private formBuilder: FormBuilder, private location: Location) {}

  ngOnInit() {
    this.initForm();
    this.loadList();
  }

  onBack() {
    this.location.back();
  }

  pageChange(page: number) {
    this.formGroup.controls.page.setValue(page);
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      page: [0, [Validators.required]],
      size: [10, [Validators.required]],
      orderBy: ['creationDate', [Validators.required]],
      direction: [Direction.ASC, [Validators.required]],
      name: ['']
    });
    this.formGroup.valueChanges.subscribe(() => this.loadList());
  }

  private loadList() {
    this.isLoading = true;
    this.service
      .findPending(
        this.formGroup.value.page,
        this.formGroup.value.size,
        this.formGroup.value.orderBy,
        this.formGroup.value.direction
      )
      .subscribe(
        response => {
          this.isLoading = false;
          this.analysts = response.data;
        },
        () => {
          this.isLoading = false;
        }
      );
  }
}
