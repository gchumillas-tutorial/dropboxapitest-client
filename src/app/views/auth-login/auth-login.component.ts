import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    const params = this._activatedRoute.snapshot.queryParams;
    const state = params['state'];
    const code = params['code'];

    if (state && code) {
      await this._authService.login(state, code);
    }

    this._router.navigate(['/home']);
  }
}
