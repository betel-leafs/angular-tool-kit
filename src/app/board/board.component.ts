import { Component, OnInit } from "@angular/core";
import { ContentConfig } from "../utilities/extensions.interfaces";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
})
export class BoardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  chartOneContent: ContentConfig = {
    widgetName: "ChartOne",
  };
  chartTwoContent: ContentConfig = {
    widgetName: "ChartTwo",
  };
}
