import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = environment.apiurl;

  constructor(private http: HttpClient) {}


getAdminById(id: number): Observable<any> {
  return this.http.get(this.apiUrl + 'admin/' + id + '/');
}

updateAdmin(id: number, data: any): Observable<any> {
  return this.http.put(`${this.apiUrl}admin/update/${id}/`, data);
}

}