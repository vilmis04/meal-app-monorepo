import { CaloriesPerGram } from '../../constants';
import { Macros } from '../Macros';

describe('Macros', () => {
  it('should calculate calories correctly', () => {
    const macros = new Macros(10, 20, 5);
    expect(macros.calories).toBe(
      Math.ceil(
        10 * CaloriesPerGram.PROTEIN +
          20 * CaloriesPerGram.CARBS +
          5 * CaloriesPerGram.FAT
      )
    );
  });

  it('should handle zero values', () => {
    const macros = new Macros(0, 0, 0);
    expect(macros.calories).toBe(0);
  });
});
