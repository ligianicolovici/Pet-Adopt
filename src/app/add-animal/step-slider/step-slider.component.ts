import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  NgForm,
} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-step-slider',
  templateUrl: './step-slider.component.html',
  styleUrls: ['./step-slider.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class StepSliderComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: new FormControl(),
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: new FormControl(),
    });
  }
  onSubmitFirstForm(adoptionForm: NgForm) {
    const value = adoptionForm.value;
    const numberOfPets = value.nrOfPets;
    console.log(numberOfPets);
  }
}
