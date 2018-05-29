import { Component, Input, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  showLogoutButton = true;

  @Output()
  logout = new EventEmitter();

  get env() {
    return environment;
  }
}
