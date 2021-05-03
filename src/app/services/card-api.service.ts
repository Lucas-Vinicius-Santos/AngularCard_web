import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {

  constructor(private http: HttpClient) { }

  listarCards(): Observable<any> {
    return this.http.get('http://localhost:3333/');
  }

  cadastrarCard(card): Observable<any> {
    return this.http.post('http://localhost:3333/new-card', card)
  }
}
