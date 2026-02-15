# Calorie Audit

Nutrition labels aren't always exact. In many regions, manufacturers are allowed a margin of error of up to ±20% on listed calories.

This tool **calculates estimated true calories from macronutrients** so you can quickly check foods you eat often and spot large discrepancies.

# How It Works

Calorie values per gram:

- **Fat**: 9 kcal
- **Carbohydrates**: 4 kcal
- **Protein**: 4 kcal

Formula

1. Multiply each macro (in grams) by its calorie value.
2. Subtract calories from dietary fiber (since it isn't fully digested).

`True Calories = (Fat x 9) + (Carbs x 4) + (Protein x 4) - (Fiber * 4)`

## Example - Zero Sugar Oreos

Label Values

- Calories: 90
- Fat: 4.5g
- Carbohydrates: 16g
  - Fiber: 2g
- Protein: <1g → Counted as 1g

Macro Calorie Calculation

- Fat → 4.5 x 9 = 40.5
- Carbs → 16 x 4 = 64
- Protein → 1 x 4 = 4
- Fiber → 2 x 4 = 8

`True Calories = (40.5 + 64 + 4) - 8 = 100.5 kcal`

Result

- Estimated true Calories = 100.5 kcal
- Label Calories = 90 kcal
- Difference: +10.5 kcal

# Why It Matters

If you track calories for fat loss, maintenance, or muscle gain, small label inaccuracies add up fast—especially for foods you eat every day.

- **More accurate tracking**: Logging the macro-calculated calories gives you a number based on actual nutrients, not a rounded label value.
- **Spot problem foods**: Some items consistently come in higher than listed. This helps you identify them and adjust portions if needed.
- **Break through plateaus**: When progress stalls, hidden calories are often the reason. This lets you verify your intake without guessing.
- **Consistency over time**: Even a 10–20 calorie difference per serving can turn into hundreds of calories per week.

This isn’t about obsessing over every gram, it’s about having a quick way to validate your high-frequency foods so your data matches your results.
