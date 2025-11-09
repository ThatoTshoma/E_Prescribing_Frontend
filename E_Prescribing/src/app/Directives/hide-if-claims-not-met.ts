import { Directive, OnInit, Input, ElementRef } from '@angular/core';
import { Authentication } from '../shared/services/authentication';

@Directive({
  selector: '[appHideIfClaimsNotMet]'
})
export class HideIfClaimsNotMet implements OnInit {
  @Input("appHideIfClaimsNotMet") claim!: Function;

  constructor(private authentication: Authentication, private elementRef: ElementRef) { }

  ngOnInit(): void {
    const claims = this.authentication.getClaims();

    if (!this.claim(claims))
      this.elementRef.nativeElement.style.display = "none";
  }


}
