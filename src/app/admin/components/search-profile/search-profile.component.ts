import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SmallPerson } from '../../models';
import { Direction, Page } from '../../../shared/models';
import { PersonService } from '../../services';
import { Location } from '@angular/common';

@Component({
  selector: 'dj-search-profile',
  templateUrl: './search-profile.component.html',
  styleUrls: ['./search-profile.component.css']
})
export class SearchProfileComponent implements OnInit {
  isLoading = false;
  formGroup: FormGroup;
  persons: Page<SmallPerson> = undefined;

  constructor(private formBuilder: FormBuilder, private service: PersonService, private location: Location) {}

  ngOnInit() {
    this.initForm();
  }

  onBack() {
    this.location.back();
  }

  search() {
    this.service
      .findByName(
        this.formGroup.value.search,
        0,
        this.formGroup.value.size,
        this.formGroup.value.searchBy,
        this.formGroup.value.orderBy,
        Direction.DESC
      )
      .subscribe(
        response => {
          this.persons = response.data;
          this.isLoading = false;
        },
        () => (this.isLoading = false)
      );
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      size: 10,
      orderBy: 'id',
      searchBy: 'name',
      search: ['', [Validators.required]]
    });
  }
}
