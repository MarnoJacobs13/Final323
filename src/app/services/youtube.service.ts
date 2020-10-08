import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http:HttpClient) { }

  getChannel(channelName):Observable<any>{
    
    const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+channelName+"&key=AIzaSyDMvhucQjK4GPjQ0wzEc7e9o2aQujYLjIY&maxResults=1"

    return this.http.get<any>(url)
  }
}
