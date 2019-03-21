import { Component } from '@angular/core';
import {HttpService} from './http.service';
import { longStackSupport } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cakes = {};
  newCake = {baker: "", image: ""};
  oneCake = {};
  anotheravg:number = 0;
  constructor(private _http: HttpService){
    this.getCakes();
    this.newCake = {baker: "", image: ""};
  }
  getCakes(){
    this._http.getCakes().subscribe(data => {
      this.cakes = data;
    });
  }
  addCake(baker, image){
    this._http.addCake(baker, image).subscribe(() => {
      this.getCakes();  
    });
  }
  addRate(id, stars, comment, cake){
    
    this._http.addRate(id, stars, comment).subscribe(()=>{
      this._http.getId(id).subscribe(tdata => {
        this.setCake(tdata);
      });
      
    });
  }
  setCake(data){
    let thisCake = data;
    this.oneCake = thisCake.data[0];
    this.calcSecondAvg(this.oneCake);
  }
  showCake(cake){
    this.oneCake = cake;
    this.calcSecondAvg(this.oneCake);
  }
  /** */
  calcSecondAvg(oneCake){
    this.anotheravg = 0;
    for (let i of oneCake.rates){
      this.anotheravg += parseInt(i.stars);
    }
    this.anotheravg /= oneCake.rates.length;
  }
}