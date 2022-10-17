import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { IItem } from '../../shared/interfaces/item.interface';
import { Subscription, map } from 'rxjs';
import { Item} from '../../shared/classes/item.class';
import { plainToClass } from 'class-transformer';
import { BASE_ARRAY_SIZE } from '../../shared/consts/base-array-size.const';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent implements OnInit, OnDestroy {
  public items: Item[] = [];
  public pageSize: number = 0;

  private subscription$ = new Subscription();

  constructor(private dataService: DataService) { }

  public ngOnInit(): void {
    this.subscription$.add(this.dataService.items$
      .pipe(map((data: IItem[]) => data.slice(-10))).subscribe((data: IItem[]) => {
      this.pageSize = data.length;
      this.items = data.map(el => {
        const updatedItem = plainToClass(Item, el);
        updatedItem.setChild(el.child);
        return updatedItem;
      });
    }));
    this.dataService.generateItems(BASE_ARRAY_SIZE);
  }

  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
