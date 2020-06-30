import { NgForm } from '@angular/forms';
import { PetFormData, ContractFormData } from './models';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AddAnimalService {
  petImages: any[] = [];
  petFormData: PetFormData = null;
  contactFormData: ContractFormData = null;
  petForm: NgForm;
  contactForm: NgForm;
  petsImagesAdded = new Subject<any[]>();
  petFormSubmit = new Subject<PetFormData>();
  contactFormSubmit = new Subject<ContractFormData>();

  submitPetForm(petForm: PetFormData) {
    if (petForm.images.length > 0) {
      this.petImages = petForm.images;
      this.petsImagesAdded.next(petForm.images);
    }
    this.petFormData = petForm;
    this.petFormSubmit.next(petForm);
  }
  submitContact(contactForm: ContractFormData) {
    this.contactFormData = contactForm;
    this.contactFormSubmit.next(contactForm);
  }
}
