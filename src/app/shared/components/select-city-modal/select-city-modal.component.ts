import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CityService } from '../../services';
import { City } from '../../models';

@Component({
  selector: 'dj-select-city-modal',
  templateUrl: './select-city-modal.component.html',
  styleUrls: ['./select-city-modal.component.css']
})
export class SelectCityModalComponent implements OnInit {
  loading = false;
  fg: FormGroup;
  cities: City[] = [];

  constructor(
    private nzModalRef: NzModalRef,
    private service: CityService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.fg = this.fb.group({ city: '' });

    this.search('');

    this.fg.controls.city.valueChanges.subscribe(this.search);
  }

  private search = city => {
    this.loading = true;
    this.service.findCounty(city).subscribe(
      response => {
        this.cities = response.data.content;
        this.loading = false;
      },
      () => (this.loading = false)
    );
  };

  destroyModal(city?: City) {
    this.nzModalRef.close(city);
  }
}
