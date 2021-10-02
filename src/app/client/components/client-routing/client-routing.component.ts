import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {
  AddressService,
  Province,
  City,
  ProvinceService,
  CityService,
  TokenService,
  PersonService
} from '../../../shared';

@Component({
  selector: 'dj-client-routing',
  templateUrl: './client-routing.component.html',
  styleUrls: ['./client-routing.component.css']
})
export class ClientRoutingComponent implements OnInit {
  isVisibleAddressModal = false;
  isAddressLoading = false;
  fg: FormGroup;
  provinces: Province[];
  cities: City[];
  viaCep: any;

  constructor(
    private readonly addressService: AddressService,
    private readonly provinceService: ProvinceService,
    private readonly cityService: CityService,
    private readonly token: TokenService,
    private readonly fb: FormBuilder,
    private readonly personService: PersonService
  ) {}

  ngOnInit() {
    this.refreshToken();
    this.checkAddress();
    this.loadProfile();
  }

  private loadProfile() {
    this.personService.findProfile(this.token.getId()).subscribe(response => {
      const profile = response.data;
      const json = JSON.stringify(profile);

      if (localStorage.length > 0) {
        localStorage.setItem('profile', json);
      } else {
        sessionStorage.setItem('profile', json);
      }
    });
  }

  private refreshToken() {
    if (this.token.isLogged()) {
      this.token.refresh();
    }
  }

  private checkAddress() {
    const sub = this.addressService.findByPerson().subscribe(
      () => {
        sub.unsubscribe();
      },
      error => {
        sub.unsubscribe();
        if (error.status === 404) {
          this.initAddressForm();
          this.isVisibleAddressModal = true;
        }
      }
    );
  }

  private initAddressForm() {
    this.fg = this.fb.group({
      province: ['', [Validators.required]],
      cep: [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(8)]
      ],
      number: [
        '',
        [Validators.required, Validators.minLength(1), Validators.maxLength(5)]
      ],
      street: ['', [Validators.required]],
      district: ['', [Validators.required]],
      complement: [''],
      city: ['', [Validators.required]]
    });

    this.onValuesChange();
  }

  private onValuesChange() {
    this.provinceService.findAll().subscribe(response => {
      this.provinces = response.data;
      this.fg.controls.province.setValue(this.provinces[0].id);
    });

    this.fg.controls.province.valueChanges.subscribe(value => {
      this.cityService.findByProvinceId(value).subscribe(response => {
        this.cities = response.data;
        this.fg.controls.city.setValue(this.cities[0].id);
        if (this.viaCep) {
          this.cities.forEach(city => {
            if (city.name === this.viaCep.localidade) {
              this.fg.controls.city.setValue(city.id);
              return;
            }
          });
        }
      });
    });

    this.fg.controls.cep.valueChanges.subscribe(value => {
      if (this.fg.controls.cep.valid) {
        this.fg.controls.number.setErrors({ required: true });
        this.addressService.findByCep(value).subscribe(data => {
          this.viaCep = data;
          this.fg.controls.street.setValue(data.logradouro);
          this.fg.controls.district.setValue(data.bairro);
          this.provinces.forEach(province => {
            if (province.uf === data.uf) {
              this.fg.controls.province.setValue(province.id);
              return;
            }
          });
        });
      }
    });
  }

  handleAddressOk() {
    this.isAddressLoading = true;
    const subscribe = this.addressService.create(this.fg.value).subscribe(
      response => {
        this.isAddressLoading = false;
        this.isVisibleAddressModal = false;
        subscribe.unsubscribe();
      },
      () => {
        this.isAddressLoading = false;
        subscribe.unsubscribe();
      }
    );
  }

  handleAddressCancel() {
    this.isVisibleAddressModal = false;
  }
}
