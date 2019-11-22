import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExplorerComponent} from './components/explorer/explorer.component';
import {ElementComponent} from './components/element/element.component';
import {MatCardModule, MatCheckboxModule, MatToolbarModule} from '@angular/material';


@NgModule({
  declarations: [
    ExplorerComponent,
    ElementComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
  ],
  exports: [
    ExplorerComponent
  ]
})
export class FinderModule {
}
