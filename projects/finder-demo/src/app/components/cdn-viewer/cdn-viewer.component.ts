import {Component} from '@angular/core';
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
  selectedElements: string[] = [];

  constructor(private filesHttp: FilesHttpService) {
    this.fetchDirectory(this.currentFolder.path);
  }

  /**
   * This functions fetches the new directory data and metadata
   * @param path: path of the directory you want to see.
   */
  fetchDirectory(path: string) {
    let anyTemp: any;

    this.filesHttp.list(path).subscribe(data => {
      anyTemp = data;
      this.response = anyTemp.data;
      this.responseBaseNames = this.response.map(obj => obj.basename);
      if (path !== '') {
        this.responseBaseNames.unshift('..');
      }
    });
    if (path !== '') {
      this.filesHttp.metadata(path).subscribe(data => {
        anyTemp = data;
        this.currentFolder = anyTemp.data;
      });
    }
  }

  switchDirectory(element: string) {
    if (element === '..') {
      if (this.currentFolder.path.indexOf('/') === -1) {
        this.currentFolder = {path: '', dirname: '', basename: 'Root'};
        this.fetchDirectory(this.currentFolder.path);
      } else {
        this.fetchDirectory(this.currentFolder.path.slice(0, this.currentFolder.path.lastIndexOf('/')));
      }
    } else {
      const directory = this.response.find(obj => obj.basename === element) as Directory;

      if (directory.type === 'dir') {
        this.fetchDirectory(directory.path);
      }
    }
  }
}
