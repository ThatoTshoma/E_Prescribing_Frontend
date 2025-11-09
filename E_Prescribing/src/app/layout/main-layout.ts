import { Component } from '@angular/core';
import { Authentication } from '../shared/services/authentication';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { claim } from '../shared/utils/claims';
import { HideIfClaimsNotMet } from '../Directives/hide-if-claims-not-met';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, RouterLink, HideIfClaimsNotMet],
  templateUrl: './main-layout.html',
  styles: ``,
})
export class MainLayout {
  constructor(private authentication: Authentication, private router: Router) {

  }
    claim = claim


  onLogout() {
    this.authentication.deleteToken();
    this.router.navigateByUrl('/login');
  }

}
