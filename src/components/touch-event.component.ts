import { Component } from '@angular/core';

@Component({
  selector: 'app-touch-event',
  templateUrl: 'touch-event.component.html'
})
export class TouchEventComponent {

  onElementClick() {
    console.log('Clicked');
  }

  onElementTap() {
    console.log('Tapped');
  }

  onElementPress() {
    console.log('Pressed');
  }
}