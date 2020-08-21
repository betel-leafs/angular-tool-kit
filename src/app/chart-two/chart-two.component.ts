import { Component, OnInit } from '@angular/core';
import { Widget } from '../utilities/extensions.decorators';
import { WidgetCategory } from '../utilities/extensions.interfaces';


@Widget({
  widgetName: 'ChartTwo'
})

@Component({
  selector: 'app-chart-two',
  templateUrl: './chart-two.component.html',
  styleUrls: ['./chart-two.component.scss']
})
export class ChartTwoComponent implements OnInit {

  constructor() { }
  public lastName:string;
  ngOnInit(): void {
  }

}
