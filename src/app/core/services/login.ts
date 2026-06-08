import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root',
})

export class loginservice {
   constructor(private http: HttpClient) {}

    login(username: string, password: string) {

    const params = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.get(
      `${environment.apiurl}user/login`,
      { params }
    );
  }
  
}
