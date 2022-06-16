import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackservService {
  readonly APIUrl = "https://survey-backend-kiosk.herokuapp.com/"

  constructor(private http: HttpClient) { }

  newFeedback(val: any): Observable<any>{
    const headers= new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept, X-Custom-Header, Upgrade-Insecure-Requests',
    })
    return this.http.post(this.APIUrl, val, headers)
  }

}
