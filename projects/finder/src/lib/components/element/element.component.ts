import {Component, Input} from '@angular/core';
import {Directory, FileInterface} from '@mathrix-education/drive-angular-api';

@Component({
  selector: 'finder-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent {
  @Input() element: FileInterface | Directory;

  constructor() {
  }
}
