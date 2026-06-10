import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment';

@Injectable({ providedIn: 'root'})
export class BuildingService {

  private apiUrl = environment.apiurl;

  constructor(private http: HttpClient) {}

getBuildingById(id: number): Observable<any> {
  return this.http.get(this.apiUrl + 'buildings/' + id + '/');
}

//  getBuilding(id: number): Observable<any> {
//     return this.http.get(`${this.apiUrl}/${id}/`);
//   }
 updateBuilding(id: number, data: any): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/${id}/update/`,
      data
    );
  }
 
}