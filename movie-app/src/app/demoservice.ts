import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Demoservice {

  private apiUrl='https://api.github.com/search/users?q=user+in:name,description,login+sort:stars-desc';

  constructor(private http:HttpClient) { }

  fetchData():Observable<any>
  {
    return this.http.get(this.apiUrl);
  }

}
