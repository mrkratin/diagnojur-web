import { Component, OnInit, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  City,
  DjForms,
  JusticeType,
  JusticeTypeEnum,
  justiceTypes,
  ProcessDegree,
  ProcessDegreeEnum,
  processDegrees,
  ProcessOrgan,
  ProcessOrganEnum,
  processOrgans,
  ProcessType,
  ProcessTypeEnum,
  processTypes,
  provinceUf,
  SolicitationSpecificType,
  SolicitationType,
  SolicitationTypeEnum,
  solicitationTypes,
  specificTypes,
  DiscountCoupon,
  DiscountCouponTypeEnum
} from '../../../shared/models';
import { CityService, DiscountCouponService } from '../../../shared/services';
import { Router } from '@angular/router';
import { Solicitation, SolicitationCreate } from '../../models';
import { SolicitationService } from '../../services';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import { DiagnosisTypesComponent } from './diagnosis-types';
import { SelectCityModalComponent } from 'src/app/shared/components';

@Component({
  selector: 'dj-add-solicitation',
  templateUrl: './add-solicitation.component.html',
  styleUrls: ['./add-solicitation.component.css']
})
export class AddSolicitationComponent implements OnInit {
  isLoading: boolean;
  isLoadingCoupon: boolean;
  error: boolean;
  formGroup: FormGroup;
  types: SolicitationType[] = solicitationTypes;
  specific: SolicitationTypeEnum = SolicitationTypeEnum.SPECIFIC;
  sTypes: SolicitationSpecificType[] = specificTypes;
  pTypes: ProcessType[] = processTypes;
  pDegrees: ProcessDegree[] = processDegrees;
  pOrgans: ProcessOrgan[] = processOrgans;
  ufs: string[];
  usingCoupon: boolean;
  discount = 0;
  discountCoupon: DiscountCoupon;
  total: number;
  nzModalRef: NzModalRef;
  aux: ProcessOrgan;
  invalidCoupon = false;
  county: City;
  countyModalEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private cityService: CityService,
    private location: Location,
    private service: SolicitationService,
    private modalService: NzModalService,
    private router: Router,
    private couponService: DiscountCouponService
  ) {}

  get organs(): ProcessOrgan[] {
    if (this.formGroup.value.processDegree === ProcessDegreeEnum.UNKNOWN) {
      return this.pOrgans;
    }
    return this.pOrgans.filter(
      value =>
        this.formGroup.value.processDegree === value.degree ||
        value.value === ProcessOrganEnum.UNKNOWN
    );
  }

  get jTypes(): JusticeType[] {
    if (this.formGroup.controls.processType.value === ProcessTypeEnum.LABOR) {
      return justiceTypes.filter(
        value => value.value === JusticeTypeEnum.FEDERAL
      );
    } else {
      return justiceTypes;
    }
  }

  ngOnInit() {
    this.initValues();
    this.initForm();
  }

  onBack() {
    this.location.back();
  }

  showDiagnosisTypes() {
    this.nzModalRef = this.modalService.create({
      nzTitle: 'Tipos de Diagnósticos',
      nzContent: DiagnosisTypesComponent,
      nzFooter: [
        {
          label: 'Fechar',
          type: 'primary',
          onClick: (modal: DiagnosisTypesComponent) => {
            modal.nzModalRef.destroy();
          }
        }
      ]
    });
  }

  openSelectCounty() {
    this.countyModalEventEmitter.subscribe(county => {
      this.county = county;
      this.formGroup.controls.county.setValue(county.id);
    });
    this.nzModalRef = this.modalService.create({
      nzTitle: 'Selecion a comarca',
      nzContent: SelectCityModalComponent,
      nzAfterClose: this.countyModalEventEmitter
    });
  }

  applyCoupon() {
    const code = this.formGroup.value.discountCoupon;
    this.couponService.isValid(code).subscribe(
      response => {
        const { data } = response;
        if (data) {
          this.couponService.findByCode(code).subscribe(response2 => {
            this.discountCoupon = response2.data;
            this.formGroup.controls.type.valueChanges.subscribe(() => {
              this.calculateDiscount();
            });
            this.calculateDiscount();
          });
        } else {
          this.invalidCoupon = true;
        }
      },
      () => (this.invalidCoupon = true)
    );
  }

  calculateDiscount() {
    if (this.discountCoupon.type === DiscountCouponTypeEnum.MONEY) {
      this.discount = this.discountCoupon.discount;
    } else {
      const type: SolicitationType = this.types.find(
        t => t.value === this.formGroup.value.type
      );
      const subtotal = type.price;
      this.discount = (subtotal * this.discountCoupon.discount) / 100;
    }
    this.updateTotal();
  }

  updateTotal() {
    this.types.forEach(type => {
      if (type.value === this.formGroup.controls.type.value) {
        this.total = type.price - this.discount;
      }
    });
  }

  openConfirm() {
    const message =
      'Estou ciente que as informações preenchidas são de minha responsabilidade e asseguro que as mesmas estão corretas';
    this.modalService.confirm({
      nzTitle: 'Confirmação',
      nzContent: `<b>${message}</b>`,
      nzOkText: 'Confirmar',
      nzOnOk: () => this.insertSolicitation()
    });
  }

  insertSolicitation() {
    this.isLoading = true;
    const solicitationCreate: SolicitationCreate = {
      type: this.formGroup.value.type,
      specificType:
        this.formGroup.value.type === SolicitationTypeEnum.SPECIFIC
          ? this.formGroup.value.specificType
          : undefined,
      process: {
        type: this.formGroup.value.processType,
        justiceType: this.formGroup.value.justiceType,
        processNumber: this.formGroup.value.processNumber,
        withLawyer: this.formGroup.value.withLawyer,
        oab:
          this.formGroup.value.withLawyer === true
            ? {
                id: undefined,
                oab: this.formGroup.value.oabNumber,
                uf: this.formGroup.value.oabUf
              }
            : undefined,
        confidentialProcess: this.formGroup.value.confidentialProcess,
        justiceSecret: this.formGroup.value.justiceSecret
          ? this.formGroup.value.justiceSecret.toString()
          : undefined,
        county: this.formGroup.value.county
      },
      payment: {
        type: this.formGroup.value.paymentType.toString(),
        usedWallet: this.formGroup.value.usedWallet,
        discountCoupon: this.formGroup.value.discountCoupon
          ? this.formGroup.value.discountCoupon.toString()
          : undefined
      }
    };
    this.service.create(solicitationCreate).subscribe(
      response => {
        this.isLoading = false;
        this.insertSuccessfully(response.data);
      },
      () => {
        this.isLoading = false;
        this.error = true;
      }
    );
  }

  private initValues() {
    this.isLoading = false;
    this.isLoadingCoupon = false;
    this.error = false;
    this.usingCoupon = false;
    this.discount = 0;
    this.total = this.types[0].price;
    this.county = undefined;
    this.ufs = [];
    provinceUf().forEach((value, key) => this.ufs.push(key));
  }

  clearOAB() {
    this.formGroup.controls.oabNumber.setValue('');
  }

  clearJusticeSecret() {
    this.formGroup.controls.justiceSecret.setValue('');
  }

  get btnDisable(): boolean {
    if (
      this.formGroup.controls.confidentialProcess.value &&
      (!this.formGroup.value.justiceSecret ||
        this.formGroup.value.justiceSecret === '')
    ) {
      return true;
    }
    if (
      this.formGroup.controls.withLawyer.value &&
      (!this.formGroup.value.oabNumber || this.formGroup.value.oabNumber === '')
    ) {
      return true;
    }
    return this.formGroup.invalid;
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      processNumber: DjForms.ProcessNumber(),
      county: ['', [Validators.required]],
      type: DjForms.SolicitationType(),
      specificType: DjForms.SolicitationSpecificType(),
      justiceType: DjForms.JusticeType(),
      processType: DjForms.ProcessType(),
      confidentialProcess: [false],
      justiceSecret: ['', [Validators.minLength(5), Validators.maxLength(255)]],
      withLawyer: [false, [Validators.required]],
      oabNumber: ['', [Validators.minLength(4), Validators.maxLength(7)]],
      oabUf: [this.ufs[0], [Validators.minLength(2), Validators.maxLength(2)]],
      paymentType: ['BILLET', [Validators.required]],
      discountCoupon: undefined,
      usedWallet: [false, [Validators.required]]
    });

    this.formGroup.controls.type.valueChanges.subscribe(value => {
      this.updateTotal();
    });

    this.formGroup.controls.processType.valueChanges.subscribe(value => {
      if (value === ProcessTypeEnum.LABOR) {
        this.formGroup.controls.justiceType.setValue(JusticeTypeEnum.FEDERAL);
      }
    });
  }

  private insertSuccessfully(solicitation: Solicitation) {
    const message =
      'Sua solicitação de diagnóstico foi recebida com sucesso. Aguardamos a confirmação do ' +
      'pagamento para encaminhamento ao Analista que realizará o Diagnóstico.\n' +
      `Para efetuar o pagamento <a href="${solicitation.payment.paymentLink}" target="_blank">clique aqui</a>`;
    this.modalService.success({
      nzTitle: 'Recebemos sua solicitação',
      nzContent: `<b>${message}</b>`,
      nzOkText: 'Visualizar',
      nzOnOk: () =>
        this.router.navigate(['/client/solicitation', solicitation.id]),
      nzCancelText: 'Solicitar novo diagnóstico',
      nzOnCancel: () => {
        this.initValues();
        this.initForm();
      }
    });
  }
}
