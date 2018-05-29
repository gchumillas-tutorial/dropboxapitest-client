import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _router: Router, private _authService: AuthService) { }

  async ngOnInit() {
    const isLogged = await this._authService.isLogged();

    if (!isLogged) {
      this._router.navigate(['/auth-url']);
    }
  }

  async logout() {
    await this._authService.logout();
    this._router.navigate(['/auth-url']);
  }
}
