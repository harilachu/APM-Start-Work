import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  cropWidth!: number;
  @Input() rating!:number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

  }

  ngOnChanges(): void {
    this.cropWidth = (this.rating/5) * 75;
  }

  starClick(): void
  {
    console.log(`this rating ${this.rating} is clicked`);
    this.ratingClicked.emit(`clicked ${this.rating}`);
  }
}
