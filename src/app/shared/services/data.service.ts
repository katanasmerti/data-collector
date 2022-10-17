import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { IItem } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public items$: Subject<IItem[]> = new Subject();

  constructor() { }

  public generateItems(amount: number): void {
    const result = [];
    for (let i = 0; i < amount; i++) {
      const obj: IItem = {
        id: i + 1,
        int: i + 1,
        float: this.getRandomFloat(),
        color: this.getRandomColor(),
        child: {
          id: (i + 1) * 2,
          color: this.getRandomColor(),
        },
      };
      result.push(obj);
    }
    this.items$.next(result);
  }

  public getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  public getRandomFloat(): number {
    const str = (Math.random() * (10 - 1) + 1).toFixed(10);
    return parseFloat(str);
  }
}
