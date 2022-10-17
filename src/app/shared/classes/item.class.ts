import { BaseItem } from './base-item.class';
import { IBaseItem } from '../interfaces/base-item.interface';
import { plainToClass } from 'class-transformer';
import { ColorStyle } from '../types/color-style.type';

export class Item {
  public readonly id: number | undefined;
  public readonly int: number | undefined;
  public readonly float: number | undefined;
  public readonly color: string | undefined;
  public child: BaseItem | undefined;

  public get colorStyle(): ColorStyle {
    return {'background': this.color};
  }

  public get getChild(): BaseItem | undefined {
    return this.child;
  }

  public setChild(data: IBaseItem) {
    this.child = plainToClass(BaseItem, data);
  }
}




