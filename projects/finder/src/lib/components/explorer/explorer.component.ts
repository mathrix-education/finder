import {Component, Input, OnInit} from '@angular/core';
import {Directory, FileInterface, FilesHttpService} from '@mathrix-education/drive-angular-api';
import {MatCheckboxChange} from '@angular/material';

@Component({
  selector: 'finder-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {
  @Input() currentFolder: Directory = {path: '', dirname: '', basename: 'Root'};
  // TODO: remove this when metadata route will be implemented
  @Input() previous: Directory[] = [];

  // TODO: remove this when metadata route will be implemented
  response: (Directory | FileInterface)[];

  selectedItems: FileInterface[] = [];

  destinationMode = false;

  // this is to 'fetch' data from the route
  anyTemp: any; // TODO: fix to acceptable type when list route type will be fixed

  constructor(private filesHttp: FilesHttpService) {
    this.fetchDirectory();
  }

  ngOnInit() {
  }

  closeModal() {
    console.log('closing modal'); // TODO: implement real modal
  }


  fetchDirectory() {
    this.filesHttp.list(this.currentFolder.path).subscribe(data => {
      this.anyTemp = data;
      this.response = this.anyTemp.data;
    });
  }

  switchDirectory(directory: Directory) {
    if (directory.type === 'dir') {
      this.previous.unshift(this.currentFolder);
      this.currentFolder = directory;
      this.fetchDirectory();
    }
  }

  goBack() {
    // TODO: implement 'cd ..' behavior
    // Will need metadata route
    if (this.currentFolder.path.indexOf('/') === -1) {
      this.currentFolder = {path: '', dirname: '', basename: 'Root'};  // TODO: metadata route
    } else {
      const backPath = this.currentFolder.path.slice(0, this.currentFolder.path.lastIndexOf('/'));
      console.log(`${this.currentFolder.path} => ${backPath}`);
      this.currentFolder = this.previous[0]; // TODO: metadata route
      this.previous.shift();
    }
    this.fetchDirectory();
  }

  clearSelection() {
    if (!this.destinationMode) {
      this.selectedItems = [];
    } else {
      this.destinationMode = false;
    }
  }

  addOrRemoveFromSelection($event: MatCheckboxChange, element: FileInterface) {
    if ($event.checked === true) {
      this.selectedItems.push(element);
    } else {
      const index = this.selectedItems.indexOf(element);
      if (index !== -1) {
        this.selectedItems.splice(index, 1);
      }
    }
  }

  switchToDestinationSelection() {
    this.destinationMode = true;
  }

  async moveItems() {
    const promises = this.selectedItems.map(this.moveOneItem.bind(this));

    await Promise.all(promises);
    // for (const element of this.selectedItems) {
    //   await this.moveOneItem(element);
    // }
    this.fetchDirectory();
    this.selectedItems = [];
    this.destinationMode = false;
  }

  async moveOneItem(element: FileInterface) {
    const oldUrl = (element.dirname ? element.dirname + '/' : '') + element.basename;
    const newUrl = (this.currentFolder.path ? this.currentFolder.path + '/' : '') + element.basename;
    return this.filesHttp.move(oldUrl, newUrl).subscribe();
  }

  logObjects(item: any) {
    console.log(item);
  }
}
