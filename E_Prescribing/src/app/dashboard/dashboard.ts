import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from '../shared/services/authentication';
import { User } from '../shared/services/user';
import { HideIfClaimsNotMet } from '../Directives/hide-if-claims-not-met';
import { claim } from '../shared/utils/claims';


@Component({
  selector: 'app-dashboard',
  imports: [HideIfClaimsNotMet],
  templateUrl: './dashboard.html',
  styles: ``,
})
export class Dashboard implements OnInit {
  constructor(private router: Router, private authentication: Authentication, private user: User) { }

  fullName: string = ``
  claim = claim

  ngOnInit(): void {
    this.user.getUserProfile().subscribe({
      next: (res: any) => this.fullName = res.fullName,
      error: (err: any) => console.log('error while retrieving user profile:\n', err)
      
    })

  }

}
