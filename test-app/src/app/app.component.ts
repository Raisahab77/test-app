import { Component } from '@angular/core';
import { NumService } from './num.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';

  number:any;
  data:any;
  page = 0;

  constructor(private _numService:NumService) { }

  ngOnInit(){
    this.getAllData();
  }

  submit(){
    console.log(this.number);
    let obj = {
      num : this.number
    }
    this._numService.postData(obj).subscribe({
      next:(res:any)=>{
        console.log(res);
      }
    })
  }

  getAllData(){
    this.page = this.page + 1;
    this._numService.getData(this.page).subscribe({
      next:(response:any)=>{
        console.log(response);
        this.data = response;
      }
    })
  }
}
