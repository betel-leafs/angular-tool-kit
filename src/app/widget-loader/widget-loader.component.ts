import {
  Component,
  OnInit,
  Input,
  ComponentFactoryResolver,
  ViewContainerRef,
} from "@angular/core";
import {
  ContentConfig,
  WidgetComponentLoadInfo,
} from "../utilities/extensions.interfaces";
import { ExtensionsService } from "../utilities/extensions.service";
import { ChartTwoComponent } from "../chart-two/chart-two.component";

@Component({
  selector: "app-widget-loader",
  templateUrl: "./widget-loader.component.html",
  styleUrls: ["./widget-loader.component.scss"],
})
export class WidgetLoaderComponent implements OnInit {
  @Input() content: ContentConfig;
  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private vf: ViewContainerRef,
    private readonly extensionsService: ExtensionsService
  ) {}

  ngOnInit(): void {
    const widgetDef = this.extensionsService.getWidget(this.content.widgetName);
    let loadInfo: WidgetComponentLoadInfo;
    loadInfo = widgetDef.runtimeComponent;
    let resolver = this.componentFactoryResolver.resolveComponentFactory(
      loadInfo.componentConstructor
    );
    let componentFactory = this.vf.createComponent(resolver);
  }
}
