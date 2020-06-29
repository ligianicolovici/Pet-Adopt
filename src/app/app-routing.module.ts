import { AuthComponent } from './auth/auth.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth/auth.guard';
import { ViewMyPetsComponent } from './view-my-pets/view-my-pets.component';
import { AdoptAnimalComponent } from './adopt-animal/adopt-animal.component';
import { AnimalFormComponent } from './add-animal/animal-form/animal-form.component';
import { ContactFormComponent } from './add-animal/contact-form/contact-form.component';
import { PreviewComponent } from './add-animal/preview/preview.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: MainComponent, canActivate: [AuthGuard] },
  {
    path: 'add',
    component: AddAnimalComponent,
    canActivate: [AuthGuard],
  },
  { path: 'view', component: ViewMyPetsComponent, canActivate: [AuthGuard] },
  { path: 'adopt', component: AdoptAnimalComponent, canActivate: [AuthGuard] },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
