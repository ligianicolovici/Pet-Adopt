import { PlaceHolderDirective } from './../shared/alert/placeholder.directive';
import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { AuthResponse } from '../shared/models';
import { AlertComponent } from '../shared/alert/alert.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginState = true;

  @ViewChild(PlaceHolderDirective, { static: false })
  alertHost: PlaceHolderDirective;

  private closeSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSwitchState() {
    this.isLoginState = !this.isLoginState;
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponse>;
    if (this.isLoginState) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      (response) => {
        this.router.navigate(['/home']);
        // console.log(response);
      },
      (errorMessage) => {
        this.showAlert(errorMessage);
        // console.log(errorMessage);
      }
    );
    form.reset();
  }

  private showAlert(message: string) {
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(
      alertComponentFactory
    );

    componentRef.instance.message = message;
    this.closeSubscription = componentRef.instance.closeEvent.subscribe(() => {
      this.closeSubscription.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
  ngOnDestroy(): void {
    if (this.closeSubscription) {
      this.closeSubscription.unsubscribe();
    }
  }
}
