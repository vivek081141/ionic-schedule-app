import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITournament, Tournament} from '../models/Tournament';
import {map} from 'rxjs/operators';
import {Team} from '../models/Team';
import {Player} from '../models/Player';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  private baseUrl = 'http:/localhost:8090/ionic';

  tournaments: Tournament[] = [];

  private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            /* 'Access-Control-Allow-Origin': '*',

               Request header field access-control-allow-origin is not allowed by Access-Control-Allow-Headers
              in preflight response.

            'Access-Control-Allow-Headers': 'access-control-allow-origin'
            */
        })};

  constructor(public httpClient: HttpClient) {
    console.log('Http provider');
  }

  getTournament(): Observable<Tournament[]> {
      return this.httpClient.get<Tournament[]>(`http://localhost:8090/ionic/tournaments`, this.httpOptions);
  }

  getTeams(id: any): Observable<Team[]> {
      return this.httpClient.get<Team[]>(`http://localhost:8090/ionic/getTeams/${id}`, this.httpOptions);
  }

  getTeamDetail(id: any): Observable<Player[]> {
      return this.httpClient.get<Player[]>(`http://localhost:8090/ionic/getTeamDetail/${id}`, this.httpOptions);
  }
}
