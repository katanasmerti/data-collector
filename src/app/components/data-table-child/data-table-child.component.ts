import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseItem } from '../../shared/classes/base-item.class';

@Component({
  selector: 'app-data-table-child',
  templateUrl: './data-table-child.component.html',
  styleUrls: ['./data-table-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableChildComponent {
  @Input() public data: BaseItem | undefined;

  constructor() { }
}
