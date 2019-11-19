import {InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplorerComponent} from './components/explorer/explorer.component';
import { ElementComponent} from './components/element/element.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import {FilesHttpService} from '@mathrix-education/drive-angular-api';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';


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
    FlexLayoutModule
  ],
  exports: [
    ExplorerComponent
  ],
  providers: [
    HttpClient,
    FilesHttpService
  ]
})
export class FinderModule { }
