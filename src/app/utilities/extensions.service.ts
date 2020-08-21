import { Injectable } from '@angular/core';
import { ExtensionDef, WidgetDef, WidgetType } from './extensions.interfaces';
import { Dictionary } from 'typescript-collections';

// @dynamic
@Injectable({
    providedIn: 'root'
})
export class ExtensionsService {
    private static instance: ExtensionsService;
    extensions: ExtensionDef[] = [];
    widgets: Dictionary<string, WidgetDef> = new Dictionary<string, WidgetDef>();

    constructor() {
        if (ExtensionsService.instance) {
            console.error('Multiple instances have been created');
        }
        ExtensionsService.instance = this;
    }

    public static getInstance(): ExtensionsService {
        if (ExtensionsService.instance) {
            return ExtensionsService.instance;
        } else {
            return new ExtensionsService();
        }
    }

    public addExtension(extension: ExtensionDef): void {
        this.extensions.push(extension);
    }

    public addWidget(widget: WidgetDef): void {
        if (this.widgets.containsKey(widget.widgetName)) {
            console.error("There is already another widget loaded with the name '" + widget.widgetName + "'");
            return;
        }

        this.widgets.setValue(widget.widgetName, widget);
    }

    public getWidget(name: string): WidgetDef {
        return this.widgets.getValue(name);
    }
}
