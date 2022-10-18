import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataTableToolbarComponent } from './components/data-table-toolbar/data-table-toolbar.component';
import { DataTableChildComponent } from './components/data-table-child/data-table-child.component';
import { DataCollectorRoutingModule } from './data-collector-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    DataTableComponent,
    DataTableToolbarComponent,
    DataTableChildComponent
  ],
  imports: [
    CommonModule,
    DataCollectorRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzInputModule,
    NzToolTipModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzIconModule,

  ]
})
export class DataCollectorModule { }
