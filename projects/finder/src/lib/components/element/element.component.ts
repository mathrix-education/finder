import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Directory, FileInterface} from '@mathrix-education/drive-angular-api';
import {MatCheckboxChange} from '@angular/material';

@Component({
  selector: 'finder-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent {
  /**
   * element: item name you want to display
   */
  @Input() element: string;
  /**
   * selectedElement: is this item 'pre'-selected
   */
  @Input() selectedElement: boolean;
  /**
   * selectedElementChange: On change of selection status, emits the new status
   */
  @Output() selectedElementChange = new EventEmitter<boolean>();
  /**
   * navigate: has clicked into text area, event handling can be done upper.
   */
  @Output() navigate = new EventEmitter<string>();

  constructor() {
  }
}
