import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DarkAngelUnit } from '../interfaces/dark-angel-unit';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = '/api/armies/darkangels';

  constructor(private http: HttpClient) { }

  // GET request to the API to get all Dark Angels units
  getDarkAngelsUnits(): Observable<DarkAngelUnit[]> {
    return this.http.get<DarkAngelUnit[]>(this.apiUrl);
  }
}
