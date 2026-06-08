import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = environment.apiurl;

  constructor(private http: HttpClient) {}


  getBuildings(): Observable<any> {
  return this.http.get( this.apiUrl + 'buildings/');
}





  login(payload: any): Observable<any> {
  return this.http.post(
    this.apiUrl + 'admin/login/',
    payload
  );
}
}