import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) {}
    
    getData():Observable<any>{
      const url = "https://api.github.com/users/MarnoJacobs13"
      return this.http.get<any>(url)
    }
}
