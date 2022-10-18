import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ItemChild } from '../../shared/classes/item-child.class';

@Component({
  selector: 'app-data-table-child',
  templateUrl: './data-table-child.component.html',
  styleUrls: ['./data-table-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableChildComponent {
  @Input() public data: ItemChild | undefined;

  constructor() { }
}
