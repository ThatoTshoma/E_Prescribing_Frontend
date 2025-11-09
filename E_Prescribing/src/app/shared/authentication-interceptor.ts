import { HttpInterceptorFn } from '@angular/common/http';
import { Authentication } from './services/authentication';
import { inject } from '@angular/core';
import { tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
  const authentication = inject(Authentication)
  const router = inject(Router)
  const toastr = inject(ToastrService)

  if (authentication.isLoggedIn()) {
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authentication.getToken())
    })
    return next(clonedReq).pipe(
      tap({
        error: (err: any) => {
          if (err.status == 401) {
            authentication.deleteToken()
            setTimeout(() => {
              toastr.info('Please login again', 'Session Expired!')
            }, 1500);
            router.navigateByUrl('/login')
          }
          else if (err.status == 403)
            toastr.error("Sorry, you're not authorized to perform the action.")
        }
      })
    );
  }
  else
    return next(req);
};
