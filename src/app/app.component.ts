import { Component } from '@angular/core';
import {YoutubeService} from './services/youtube.service'
import { CovidService } from './services/covid.service'
import { GithubService } from './services/github.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = "app";
    
    country:any
    cntry: any
    channels:any
    confirmed:Number
    recovered:Number
    deaths:Number
    users:String[]

    constructor(private youtube:YoutubeService, private covid:CovidService, private githubService:GithubService){}

    ngOnInit(){
      this.youtube.getChannel("pewdiepie").subscribe((data) => {
        this.channels = data.items
        })
      this.covid.getCountry().subscribe((data) => {
        this.country = data
        })   
      }
    
      getCoronaData(){
      this.covid.getCoronaRealTimeData(this.cntry).subscribe((data) => {
        var index = data.length - 1
        this.confirmed = data[index].Confirmed
        this.recovered = data[index].Recovered
        this.deaths = data[index].Deaths
      })
    } 

    getCountry(cntry:any){
      this.cntry = cntry
    }

    getUsers(){
      this.githubService.getData().subscribe((data) => {
        this.users = data
      })
    }
}

