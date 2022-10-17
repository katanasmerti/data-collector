import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { DataTableToolbarComponent } from './data-table-toolbar/data-table-toolbar.component';
import { DataTableChildComponent } from './data-table-child/data-table-child.component';
import {DataCollectorRoutingModule} from "./data-collector-routing.module";

@NgModule({
  declarations: [
    DataTableComponent,
    DataTableToolbarComponent,
    DataTableChildComponent
  ],
  imports: [
    CommonModule,
    DataCollectorRoutingModule,
  ]
})
export class DataCollectorModule { }
