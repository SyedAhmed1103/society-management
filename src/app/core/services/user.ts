import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

export interface CreateUserRequest {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  userStatus: number;
}

export interface PetstoreUser {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  userStatus: number;
}

@Injectable({
  providedIn: 'root',
})

export class User {
  private readonly apiUrl = 'https://petstore.swagger.io/v2/user';

  constructor(private http: HttpClient) {}

  createUser(user: CreateUserRequest) {
    return this.http.post(this.apiUrl, user);
  }

  getUser(username: string) {
    return this.http.get<PetstoreUser>(
      `${this.apiUrl}/${encodeURIComponent(username)}`
    );
  }

  login(username: string, password: string) {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.get(`${this.apiUrl}/login`, {
      params,
      responseType: 'text',
    });
  }
  
}
