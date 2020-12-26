import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Keyboard } from '../models/keyboard';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {

  constructor(private httpClient:HttpClient) { }

  addNewKeyboard(keyboard: Keyboard): Observable<any> {
    const postUrl = environment.apiUrl + '/api/keyboards';
    
    return this.httpClient.post(postUrl, keyboard);
  }

  getAllKeyboards(): Observable<any> {
    const getUrl = environment.apiUrl + '/api/keyboards';

    return this.httpClient.get<Keyboard[]>(getUrl).pipe(map((keyboards) =>{
      return keyboards;
    }));
  }

  filterKeyboards(filterParams: any): Observable<any> {
    const filterUrl = environment.apiUrl + '/api/filterKeyboards';

    return this.httpClient.post<Keyboard[]>(filterUrl, filterParams).pipe((keyboards) => {
      return keyboards;
    })
  }
}
