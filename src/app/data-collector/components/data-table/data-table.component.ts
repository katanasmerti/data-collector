import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { WorkerService } from '../../../shared/services/worker.service';
import { IItem } from '../../../shared/interfaces/item.interface';
import { Subscription, map } from 'rxjs';
import { Item} from '../../../shared/classes/item.class';
import { plainToClass } from 'class-transformer';

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

  constructor(private workerService: WorkerService, private cdr: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this.subscription$.add(this.workerService.workerData$
      .pipe(map((data: IItem[]) => data.slice(-10)))
      .subscribe((data: IItem[]) => {
        this.pageSize = data.length;
        this.items = data.map(el => {
          const updatedItem = plainToClass(Item, el);
          updatedItem.setChild(el.child);
          return updatedItem;
        });
        this.cdr.markForCheck();
      }
    ));
  }

  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  public trackByFn(index: number, item: Item): number {
    return item?.id as number;
  }
}
