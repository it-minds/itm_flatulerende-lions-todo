import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aggregate-view',
  templateUrl: './aggregate-view.component.html',
  styleUrls: ['./aggregate-view.component.scss']
})
export class AggregateViewComponent implements OnInit {

  constructor() { }

  searchBarValue: string = "";

  ngOnInit(): void {
  }

}
