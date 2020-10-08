import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http:HttpClient) { }

  getCountry():Observable<any>{
    const url = "https://api.covid19api.com/countries"
    return this.http.get<any>(url)
  }

  getCoronaRealTimeData(cntry):Observable<any>{
    const url = "https://api.covid19api.com/total/dayone/country/south-africa"
    return this.http.get<any>(url)
  }
}
