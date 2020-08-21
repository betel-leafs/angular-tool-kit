import { Type } from "@angular/core";
import { ExtensionDef, WidgetDef } from "./extensions.interfaces";
import { ExtensionsService } from "./extensions.service";

export function Widget(definition: WidgetDef) {
  return (constructor: Type<any>): void => {
    const extensionsService = ExtensionsService.getInstance();
    definition.runtimeComponent = {};
    definition.runtimeComponent.componentConstructor = constructor;
    // constructor.prototype.widgetDef = definition;
    extensionsService.addWidget(definition);
  };
}
