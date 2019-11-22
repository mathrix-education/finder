import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'finder-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent {
  /**
   * title: Input string to be displayed in top bar of component.
   */
  @Input() title: string;
  /**
   * elements: array of the elements you want to display.
   */
  @Input() elements: string[];
  /**
   * clicked: on click on the element, sending a new event to the parent.
   */
  @Output() clicked = new EventEmitter<string>();
  /**
   * selected: string array of selected input elements. Can be "preset" by providing a array with elements matching.
   * Use Two-Way binding with [(selected)].
   */
  @Input() selected: string[];
  /**
   * selectedChange: string array emitted when selection changes.
   * Use Two-Way binding with [(selected)].
   */
  @Output() selectedChange = new EventEmitter<string[]>();

  constructor() {
    if (!this.selected) {
      this.selected = [];
    }
  }

  selectionChange(element, $event) {
    const index = this.selected.indexOf(element);

    if (index !== -1 && !$event) {
      this.selected.splice(index, 1);
    } else if ($event) {
      this.selected.push(element);
    }
    this.selectedChange.emit(this.selected);
  }
}
