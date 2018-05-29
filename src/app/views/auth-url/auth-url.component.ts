import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-url',
  templateUrl: './auth-url.component.html',
  styleUrls: ['./auth-url.component.scss']
})
export class AuthUrlComponent implements OnInit {
  authUrl: string;

  constructor(private _authService: AuthService) { }

  async ngOnInit() {
    this.authUrl = await this._authService.authUrl();
  }
}
