import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  basicRating: number = 1;
  starRating: number = 0;
  heartRating: number = 2;

  constructor() { }

  ngOnInit() {
  }

}
