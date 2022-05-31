import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TreeTableComponent } from './tree-table/tree-table.component';
import {TreeTable, TreeTableModule} from "primeng/treetable";
import {TreeGridComponent} from "src/TreeGrid.component";

@NgModule({
  declarations: [
    AppComponent,
    TreeTableComponent,
    TreeGridComponent
  ],
  imports: [
    BrowserModule,
    TreeTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
