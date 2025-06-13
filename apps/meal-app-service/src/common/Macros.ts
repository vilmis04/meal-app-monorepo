import { CaloriesPerGram } from '../constants';

export class Macros {
  constructor(
    public protein: number,
    public carbs: number,
    public fat: number
  ) {}

  get calories(): number {
    return Math.ceil(
      this.protein * CaloriesPerGram.PROTEIN +
        this.carbs * CaloriesPerGram.CARBS +
        this.fat * CaloriesPerGram.FAT
    );
  }
}
