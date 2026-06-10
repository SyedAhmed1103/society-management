import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class WingService {

  private apiUrl = environment.apiurl;

  constructor(private http: HttpClient) {}

getWings(): Observable<any> {
  return this.http.get(this.apiUrl + 'wings/');
}


createWing(data: any): Observable<any> {
  return this.http.post(this.apiUrl + 'wings/create/',data);
}


updateWing(id: number, data: any) {
  return this.http.put(
    `${this.apiUrl}wings/${id}/update/`,
    data
  );
}






 
}