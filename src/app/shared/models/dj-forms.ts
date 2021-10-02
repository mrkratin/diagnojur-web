import { FormControl, ValidationErrors, Validators } from '@angular/forms';
import { SolicitationType, solicitationTypes } from './solicitation-type';
import { JusticeType, justiceTypes } from './justice-type';
import {
  SolicitationSpecificType,
  specificTypes,
} from './solicitation-specific-type';
import { ProcessType, processTypes } from './process-type';
import { ProcessDegree, processDegrees } from './process-degree';
import { ProcessOrgan, processOrgans } from './process-organ';
import { CpfValidator } from '../validators';
import * as moment from 'moment';

export class DjForms {
  private static readonly types: SolicitationType[] = solicitationTypes;
  private static readonly jTypes: JusticeType[] = justiceTypes;
  private static readonly sTypes: SolicitationSpecificType[] = specificTypes;
  private static readonly pTypes: ProcessType[] = processTypes;
  private static readonly pDegrees: ProcessDegree[] = processDegrees;
  private static readonly pOrgans: ProcessOrgan[] = processOrgans;

  static Name(value?: string): FormControl {
    return new FormControl(value ? value : '', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(255),
      this.nameComplete,
    ]);
  }
  static Password(value?: string): FormControl {
    return new FormControl(value ? value : '', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(24),
    ]);
  }

  static ProcessNumber(): FormControl {
    return new FormControl('', [
      Validators.required,
      Validators.minLength(20),
      Validators.maxLength(20),
    ]);
  }

  static JusticeType(): FormControl {
    return new FormControl(this.jTypes[0].value, [Validators.required]);
  }

  static SolicitationType(): FormControl {
    return new FormControl(this.types[0].value, [Validators.required]);
  }

  static SolicitationSpecificType(): FormControl {
    return new FormControl(this.sTypes[0].value, [Validators.required]);
  }

  static ProcessType(): FormControl {
    return new FormControl(this.pTypes[0].value, [Validators.required]);
  }

  static ProcessDegree(): FormControl {
    return new FormControl(this.pDegrees[0].value, [Validators.required]);
  }

  static ProcessOrgan(): FormControl {
    return new FormControl(this.pOrgans[0].value, [Validators.required]);
  }

  private static nameComplete = (
    control: FormControl
  ): ValidationErrors | null => {
    if (
      control.value === '' ||
      control.value.toString().split(' ').length === 1
    ) {
      return { complete: true };
    } else if (
      control.value.toString().indexOf(' ') > 0 &&
      control.value.toString().indexOf(' ') ===
        control.value.toString().length - 1
    ) {
      return { complete: true };
    }
    return null;
  };

  static Email(value?: string) {
    return new FormControl(value ? value : '', [
      Validators.required,
      Validators.email,
    ]);
  }

  static CPF(value?: string): FormControl {
    return new FormControl(value ? value : '', [
      Validators.required,
      CpfValidator.validate,
    ]);
  }

  static OabNumber(oab?: number): FormControl {
    return new FormControl(oab ? oab : '', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(7),
    ]);
  }

  static OabUF(uf?: string): FormControl {
    return new FormControl(uf ? uf : '', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(2),
    ]);
  }

  static PartName(name?: string): FormControl {
    return new FormControl(name ? name : '', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(255),
    ]);
  }

  static ProcessEventTitle(title?: string): FormControl {
    return new FormControl(title ? title : '', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
    ]);
  }

  static ProcessEventDescription(description?: string): FormControl {
    return new FormControl(description ? description : '', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(5000),
    ]);
  }

  static ProcessEventDateOccurrence(date?: Date): FormControl {
    return new FormControl(date ? date : moment().format(), [
      Validators.required,
    ]);
  }

  static ReplyDescription(): FormControl {
    return new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(1024),
    ]);
  }

  static judgesName(name?: string) {
    return [
      name ? name : undefined,
      [Validators.required, Validators.minLength(6), Validators.maxLength(100)],
    ];
  }

  static DiscountCouponCode(code?: string) {
    return [code ? code : undefined, [Validators.required]];
  }
}
