import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../service/api-call.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-live',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit{
   liveMatch:any
  constructor(private _api:ApiCallService){
      
  }

  ngOnInit(): void {
    this.loadLiveMatches();
  }

  private loadLiveMatches(){
    this._api.getLiveMatches().subscribe({
      next:data=>{
        console.log(data);
        this.liveMatch=data;
        console.log(this.liveMatch);
        
      } ,
     error: error=> {
        console.log(error);
      }
  });
  }
}
