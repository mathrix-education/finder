import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplorerComponent} from './components/folder-modal/explorer.component';
import { ElementComponent} from './components/element/element.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import {DriveApiModule, FilesHttpService} from '@mathrix-education/drive-angular-api';


@NgModule({
  declarations: [
    ExplorerComponent,
    ElementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCheckboxModule,
    DriveApiModule
  ],
  exports: [
    ExplorerComponent
  ],
  providers: [
    FilesHttpService
  ]
})
export class FinderModule { }
