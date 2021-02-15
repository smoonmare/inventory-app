import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ValidatorFn, Validators, AbstractControl } from '@angular/forms';

function minDateValidation(date: Date): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = new Date(control.value) < date;
    return forbidden ? {minDateValidation: {value: control.value}}
    : null;
  };
}

@Component({
  selector: 'in-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  productForm: FormGroup;
  deviceType = 'tablet';

  deviceTypes = [{
    name: 'Tablet',
    icon: 'tablet',
  }, {
    name: 'Laptop',
    icon: 'computer',
  }, {
    name: 'Phone',
    icon: 'mobile',
  }, {
    name: 'Monitor',
    icon: 'display',
  }];
  selectDevice(device: any): any {
    this.deviceType = device.icon;
  }

  get basicFeatures(): FormArray {
    return this.productForm.get('basic.features') as FormArray;
  }

  addFeature() {
    this.basicFeatures.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      basic: fb.group({
        name: ['', Validators.required],
        description: '',
        active: false,
        features: fb.array([
          fb.control('')
        ])
      }),
      expiration: fb.group({
        expirationDate: [null,
        Validators.compose([Validators.required,
        minDateValidation(new Date())])],
      })
    });
  }

  ngOnInit(): void {
  }

  get isBasicInvalid(): boolean {
    return this.productForm.get('basic')!.invalid;
  }

  get expirationError(): any {
    if (this.productForm.get('expiration.expirationDate')!.hasError('required')) {
        return 'This Field is Required!';
    }
    if     (this.productForm.get('expiration.expirationDate')!.hasError('minDateValidation')) {
        return 'Expiration should be after today\'s date';
    }
  }
}
