import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../shared/services/data.service';
import { BASE_ARRAY_SIZE } from '../../shared/consts/base-array-size.const';
import {Subscription} from 'rxjs';
import { BASE_TIMER } from '../../shared/consts/base-timer.const';

@Component({
  selector: 'app-data-table-toolbar',
  templateUrl: './data-table-toolbar.component.html',
  styleUrls: ['./data-table-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableToolbarComponent implements OnInit, OnDestroy {
  public form: FormGroup;

  private subscription$ = new Subscription();

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.form = this.fb.group({
      timer: [BASE_TIMER, [Validators.required]],
      size: [BASE_ARRAY_SIZE, [Validators.required]],
    });
  }

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  public submitForm(): void {
    this.subscription$.unsubscribe();
    this.dataService.setParams(this.form.value);
  }

  public stopJob($event: MouseEvent): void {
    $event.preventDefault();
  }

  private subscribeOnStream(): void {
    this.subscription$.add(this.dataService.stream$?.subscribe());
  }
}
