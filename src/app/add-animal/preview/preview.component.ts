import { PetFormData, ContractFormData } from './../models';
import { Subscription } from 'rxjs';
import { AddAnimalService } from './../add-animal.component.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'bootstrap';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit, OnDestroy {
  petPics: any[] = [];
  petFormInput: PetFormData = null;
  contactFormInput: ContractFormData = null;
  subscriptionPet: Subscription;
  subscriptionContact: Subscription;
  subscriptionPics: Subscription;
  constructor(private addAnimalService: AddAnimalService) {}
  ngOnDestroy(): void {
    this.subscriptionPics.unsubscribe();
    this.subscriptionContact.unsubscribe();
    this.subscriptionPet.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptionPics = this.addAnimalService.petsImagesAdded.subscribe(
      (images: any[]) => {
        this.petPics = images;
      }
    );
    this.subscriptionPet = this.addAnimalService.petFormSubmit.subscribe(
      (petInput: PetFormData) => {
        this.petFormInput = petInput;
      }
    );
    this.subscriptionContact = this.addAnimalService.contactFormSubmit.subscribe(
      (contactInput: ContractFormData) => {
        this.contactFormInput = contactInput;
      }
    );
  }
}
