import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExplorerComponent} from './components/explorer/explorer.component';
import {ElementComponent} from './components/element/element.component';
import {MatCardModule, MatCheckboxModule, MatToolbarModule} from '@angular/material';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ExplorerComponent,
    ElementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
  ],
  exports: [
    ExplorerComponent
  ]
})
export class FinderModule {
}
