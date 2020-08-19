import { Injectable, ElementRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { DynamicOverlay } from './dynamic-overlay.service';
import { ComponentPortal } from '@angular/cdk/portal';
import { ProgressContainerComponent } from '../progress-container/progress-container.component';

@Injectable({
  providedIn: 'root'
})
export class ShowProgressService {

  constructor(private dynamicOverlay: DynamicOverlay,) {
  }

  // showGlobalOverlay() {
  //   const overlayRef = this.overlay.create({
  //     positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
  //     hasBackdrop: true
  //   });
  //   overlayRef.attach(new ComponentPortal(ProgressContainerComponent))
  // }

  showSelfOverlay(elRef: ElementRef): OverlayRef {
    this.dynamicOverlay.setContainerElement(elRef.nativeElement);
    const overlayRef = this.dynamicOverlay.create({
      positionStrategy: this.dynamicOverlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true
    });
    overlayRef.attach(new ComponentPortal(ProgressContainerComponent));
    return overlayRef;
  }
  close(overlayRef: OverlayRef) {
    overlayRef.detach();
  }
}
