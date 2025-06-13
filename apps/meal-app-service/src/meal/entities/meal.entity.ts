import { AuditEntity } from '../../common/AuditEntity';
import { Macros } from '../../common/Macros';

export class Meal extends AuditEntity {
  private _modified: boolean = false;

  constructor(
    public name: string,
    public description: string,
    private _macros: Macros
  ) {
    super();
  }

  get modified(): boolean {
    return this._modified;
  }

  get calories(): number {
    return this._macros.calories;
  }

  get protein(): number {
    return this._macros.protein;
  }

  set protein(value: number) {
    this._modified = true;
    this._macros.protein = value;
  }

  get carbs(): number {
    return this._macros.carbs;
  }

  set carbs(value: number) {
    this._modified = true;
    this._macros.carbs = value;
  }

  get fat(): number {
    return this._macros.fat;
  }

  set fat(value: number) {
    this._modified = true;
    this._macros.fat = value;
  }
}
