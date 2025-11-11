import { Injectable } from '@angular/core';
import { Authentication } from './authentication';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class User {

  constructor(private authentication: Authentication, private httpClient: HttpClient) { }

    getUserProfile() {
    return this.httpClient.get(environment.apiBaseUrl + '/Account/GetUserProfile')
    
    
  }
}
