import { ColorStyle } from '../types/color-style.type';

export class BaseItem {
  public readonly id: number | undefined;
  public readonly color: string | undefined;

  public get colorStyle(): ColorStyle {
    return {'background': this.color};
  }
}
