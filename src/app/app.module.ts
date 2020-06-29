import { AlertComponent } from './shared/alert/alert.component';
import { PlaceHolderDirective } from './shared/alert/placeholder.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';

import { AddAnimalComponent } from './add-animal/add-animal.component';
import { ViewMyPetsComponent } from './view-my-pets/view-my-pets.component';
import { AppRoutingModule } from './app-routing.module';
import { AnimalFormComponent } from './add-animal/animal-form/animal-form.component';
import { ContactFormComponent } from './add-animal/contact-form/contact-form.component';
import { StepSliderComponent } from './add-animal/step-slider/step-slider.component';
import { PreviewComponent } from './add-animal/preview/preview.component';
import { AdoptAnimalComponent } from './adopt-animal/adopt-animal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PlaceHolderDirective,
    AlertComponent,
    MainComponent,
    HeaderComponent,
    AddAnimalComponent,
    ViewMyPetsComponent,
    AnimalFormComponent,
    ContactFormComponent,
    StepSliderComponent,
    PreviewComponent,
    AdoptAnimalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
