import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackservService {
  readonly APIUrl = "https://survey-backend-kiosk.herokuapp.com/"

  constructor(private http: HttpClient) { }

  newFeedback(val: any): Observable<any>{
    return this.http.post(this.APIUrl, val)
  }

}
