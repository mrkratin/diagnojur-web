import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from '../profile-data.service';
import { Address, CityService, City, AddressService } from '../../../../shared';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dj-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  address: Address;
  formGroup: FormGroup;
  counties: City[] = [];
  isLoading = false;

  constructor(
    private readonly storage: ProfileDataService,
    private readonly formBuilder: FormBuilder,
    private readonly cityService: CityService,
    private readonly addressService: AddressService
  ) {}

  save() {
    this.isLoading = true;
    this.addressService
      .update(this.address.id, this.formGroup.value)
      .subscribe(
        () => (this.isLoading = false),
        () => (this.isLoading = false)
      );
  }

  findCity(city: string) {
    if (city) {
      this.cityService.findCounty(city).subscribe(response => {
        this.counties = response.data.content;
      });
    }
  }

  ngOnInit() {
    this.address = this.storage.profile.address;
    this.counties.push(this.address.city);
    this.formGroup = this.formBuilder.group({
      id: [this.address.id, [Validators.required]],
      street: [this.address.street, [Validators.required]],
      cep: [this.address.cep, [Validators.required]],
      district: [this.address.district, [Validators.required]],
      complement: [this.address.complement, [Validators.required]],
      number: [this.address.number, [Validators.required]],
      city: [this.address.city.id, [Validators.required]]
    });
  }
}
