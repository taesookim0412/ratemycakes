import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-bakedby',
  templateUrl: './bakedby.component.html',
  styleUrls: ['./bakedby.component.css']
})
export class BakedbyComponent implements OnInit, OnChanges {
  @Input() bakedby: any;
  @Input() anotheravg: any;
  avg: number = 0;
  ratings = {};
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.avg = this.getAvg();
    this.ratings = this.bakedby.rates;
    console.log(this.ratings);
  }
  getAvg(): number {
    let sum: number = 0;
    for (let i of this.bakedby.rates) {
      sum += parseInt(i.stars);
    }
    sum /= this.bakedby.rates.length;
    return sum;
  }
}