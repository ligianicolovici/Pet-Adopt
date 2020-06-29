import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isShown = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  onLogout() {
    this.authService.logout();
  }
  onToggle() {
    this.isShown = !this.isShown;
  }
}
