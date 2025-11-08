import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TOKEN_KEY } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class Authentication {
  constructor(private http: HttpClient) {

   }
    login(formData: any) {
    return this.http.post(environment.apiBaseUrl + '/Account/Login', formData);
  }
}
