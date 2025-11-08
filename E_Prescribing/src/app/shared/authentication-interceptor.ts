import { HttpInterceptorFn } from '@angular/common/http';
import { Authentication } from './services/authentication';
import { inject } from '@angular/core';

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
  const authentication = inject(Authentication)
  return next(req);
};
