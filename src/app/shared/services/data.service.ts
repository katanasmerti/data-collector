import { Injectable } from '@angular/core';
import {interval, Observable} from 'rxjs';
import { IItem } from '../interfaces/item.interface';
import { toData, WebWorker } from '@ng-web-apis/workers';
import { generateItems } from '../helpers/helpers';
import { ISettingsConfig } from '../interfaces/settings-config.interface';
import { BASE_TIMER } from '../consts/base-timer.const';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public stream$: Observable<number> = interval(BASE_TIMER);
  private readonly worker = WebWorker.fromFunction<number, IItem[]>(generateItems);
  public readonly workerData$: Observable<IItem[]> = this.worker.pipe(toData());

  private settings: ISettingsConfig = {
    timer: 1000,
    size: 10,
  };

  constructor() { }

  public generateStream(): void {
    this.stream$ = interval(this.settings.timer);
  }

  public generateItems(): void {
    this.worker.postMessage(this.settings.size);
  }

  public setParams(data: ISettingsConfig): void {
    this.settings = data;
    this.generateStream();
  }
}
