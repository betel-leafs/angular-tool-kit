import { Component, OnInit } from '@angular/core';
import { Widget } from '../utilities/extensions.decorators';

@Widget({
  widgetName: 'ChartOne'
})

@Component({
  selector: 'app-chart-one',
  templateUrl: './chart-one.component.html',
  styleUrls: ['./chart-one.component.scss']
})
export class ChartOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
