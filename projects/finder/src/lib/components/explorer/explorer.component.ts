import {Component, Input} from '@angular/core';

@Component({
  selector: 'finder-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent {
  @Input() title: string;
  @Input() elements: string[];

  constructor() {
  }
}
