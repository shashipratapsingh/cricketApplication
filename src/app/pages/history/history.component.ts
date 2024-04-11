import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../service/api-call.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit{
  allMatches:any
 constructor(private _api:ApiCallService){
  

 }
  ngOnInit(): void {
    this._api.getAllMatches().subscribe({
      next:data=>{
        this.allMatches=data
      },
      error:error=>{
        console.log(error);
      }
    })
  }
}
