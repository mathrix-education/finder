import { Component, OnInit } from '@angular/core';
import {Directory, FileInterface, FilesHttpService} from '@mathrix-education/drive-angular-api';

@Component({
  selector: 'app-cdn-viewer',
  templateUrl: './cdn-viewer.component.html',
  styleUrls: ['./cdn-viewer.component.scss']
})
export class CdnViewerComponent {
  currentFolder: Directory = {path: '', dirname: '', basename: 'Root'};
  response: (Directory | FileInterface)[];
  responseBaseNames: string[];

  // this is to 'fetch' data from the route
  anyTemp: any;

  constructor(private filesHttp: FilesHttpService) {
    this.fetchDirectory();
  }

  fetchDirectory() {
    this.filesHttp.list(this.currentFolder.path).subscribe(data => {
      this.anyTemp = data;
      this.response = this.anyTemp.data;
      this.responseBaseNames = this.response.map(obj => obj.basename);
    });
  }

  switchDirectory(element: string) {
    // const directory = this.response.find(obj => obj.basename === element);
    // if (directory.type === 'dir') {
    //   this.currentFolder = directory;
    //   this.fetchDirectory();
    // }
    console.log('SWITCHING TO ' + element);
  }

  goBack() {
    // TODO: implement 'cd ..' behavior
    // Will need metadata route
    if (this.currentFolder.path.indexOf('/') === -1) {
      this.currentFolder = {path: '', dirname: '', basename: 'Root'};  // TODO: metadata route
    } else {
      const backPath = this.currentFolder.path.slice(0, this.currentFolder.path.lastIndexOf('/'));
      console.log(`${this.currentFolder.path} => ${backPath}`);
    }
    this.fetchDirectory();
  }

  logObjects(item: any) {
    console.log(item);
  }
}
