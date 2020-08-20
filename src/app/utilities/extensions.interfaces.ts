import { Type } from '@angular/core';
import { Navigation } from '@angular/router';

export interface WidgetComponentLoadInfo {
  module?: string;
  component?: string;
  componentConstructor?: Type<any>;
}

export enum WidgetType {
  Content,
  Context
}

export interface WidgetDef {
  widgetName: string;
  runtimeComponent?: WidgetComponentLoadInfo;
}

export enum WidgetCategory {
  Graphic,
  Chart,
  Map,
  Other
}

export interface ExtensionDef {
  name: string;
  navigation?: Navigation[];
  moduleName?: string;
}

export interface ContentConfig {
  widgetName: string;
}

export interface WidgetComponentLoadInfo {
  module?: string;
  component?: string;
  componentConstructor?: Type<any>;
}
