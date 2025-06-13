import { Macros } from '../../../common/Macros';
import { Meal } from '../meal.entity';

describe('meal.entity.spec.ts', () => {
  it('should be able to create a meal with valid macros', () => {
    const macros = new Macros(10, 20, 5);
    const meal = new Meal(
      'Eggs and toast',
      '2 eggs and 1 toast with butter',
      macros
    );

    expect(meal.name).toBe('Eggs and toast');
    expect(meal.description).toBe('2 eggs and 1 toast with butter');
    expect(meal.calories).toBe(macros.calories);
    expect(meal.protein).toBe(macros.protein);
    expect(meal.carbs).toBe(macros.carbs);
    expect(meal.fat).toBe(macros.fat);
  });

  it('should be able to modify macros', () => {
    const meal = new Meal(
      'Eggs and toast',
      '2 eggs and 1 toast with butter',
      new Macros(10, 20, 5)
    );

    meal.protein = 15;
    meal.carbs = 25;
    meal.fat = 10;

    const calories = Math.ceil(15 * 4 + 25 * 4 + 10 * 9); // Assuming CaloriesPerGram values

    expect(meal.calories).toBe(calories);
    expect(meal.protein).toBe(15);
    expect(meal.carbs).toBe(25);
    expect(meal.fat).toBe(10);
  });
});
