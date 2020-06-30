import { PetFormData } from './../models';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AddAnimalService } from '../add-animal.component.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css'],
})
export class AnimalFormComponent implements OnInit {
  imagePath;
  imgURL: any;
  images: any[] = [];
  message: string;
  validity = false;
  constructor(private addAnimalService: AddAnimalService) {}

  ngOnInit(): void {}

  preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      this.images.push(reader.result);
    };
  }
  onDeleteImage(index: number) {
    console.log(index);
    this.images = this.images.filter((img, ind) => {
      console.log('Din array: ' + ind);
      return ind !== index;
    });
  }
  onPetSubmit(animalForm: NgForm) {
    if (!animalForm.valid) {
      return;
    }
    const petFormResult: PetFormData = {
      nrOfPets: animalForm.value.nrOfPets,
      title: animalForm.value.title,
      healthCare: animalForm.value.healthProblems ? true : false,
      foster: animalForm.value.foster ? true : false,
      adoption: animalForm.value.adoption ? true : false,
      healthCareInstructions: animalForm.value.healthProblems
        ? animalForm.value.healthNeeds
        : null,
      fosterDays: animalForm.form.value.foster
        ? animalForm.value.fosterDays
        : null,
      images: this.images.length > 0 ? this.images : [],
      story: animalForm.value.story,
    };
    this.validity = true;
    this.addAnimalService.submitPetForm(petFormResult);
    this.addAnimalService.petForm = animalForm;
  }
}
