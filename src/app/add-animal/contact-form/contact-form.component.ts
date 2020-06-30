import { ContractFormData } from './../models';
import { NgForm } from '@angular/forms';
import { AddAnimalService } from './../add-animal.component.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  constructor(private addAnimalService: AddAnimalService) {}

  ngOnInit(): void {}
  onContactFormSumbit(contactForm: NgForm) {
    if (!contactForm.valid) {
      return;
    }
    const contactFormResult: ContractFormData = {
      firstname: contactForm.value.firstname,
      lastname: contactForm.value.lastname,
      email: contactForm.value.email,
      mobile: contactForm.value.mobile,
    };
    this.addAnimalService.submitContact(contactFormResult);
    this.addAnimalService.contactForm = contactForm;
  }
}
