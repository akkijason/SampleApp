import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private _http: HttpClient) { }

  getJsonData(): Observable<Product[]> {
    return this._http.get<Product[]>('/assets/inventory.json');
  }

  addItemToList(params: Product) {
    console.log(`posted data ${params}`);
    localStorage.setItem('tempData', JSON.stringify(params));
    return params;

  }
}
