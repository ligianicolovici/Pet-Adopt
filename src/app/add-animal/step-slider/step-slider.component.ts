import { AddAnimalService } from './../add-animal.component.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  NgForm,
} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  firstFormGroup: NgForm;
  secondFormGroup: NgForm;

  constructor(private addAnimalService: AddAnimalService) {}

  ngOnInit() {
    this.firstFormGroup = this.addAnimalService.petForm;
    this.secondFormGroup = this.addAnimalService.contactForm;
  }
}
