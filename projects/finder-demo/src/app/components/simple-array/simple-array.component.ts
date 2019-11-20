import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-array',
  templateUrl: './simple-array.component.html',
  styleUrls: ['./simple-array.component.scss']
})
export class SimpleArrayComponent {
  title = 'finder-demo';
  mockFolder: string[] = [
    'Element 1',
    'Element 2',
    'Element 3',
    'Element 4',
    'Element 5',
    'Element 1',
    'Element 2',
    'Element 3',
    'Element 4',
    'Element 5',
    'Element 1',
    'Element 2',
    'Element 3',
    'Element 4',
    'Element 5'
  ];

  logEvent($event: string) {
    console.log($event);
  }
}
