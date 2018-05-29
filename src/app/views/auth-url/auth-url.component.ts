import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-url',
  templateUrl: './auth-url.component.html',
  styleUrls: ['./auth-url.component.scss']
})
export class AuthUrlComponent implements OnInit {
  authUrl: string;

  constructor(private _router: Router, private _authService: AuthService) { }

  async ngOnInit() {
    if (await this._authService.isLogged()) {
      this._router.navigate(['/home']);
      return;
    }

    this.authUrl = await this._authService.authUrl();
  }
}
