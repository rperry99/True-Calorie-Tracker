// Fat = 9 kcal / g
// Carb = 4 kcal / g
// Protein = 4 kcal / g
// Dietary Fiber = 4 kcal / g
// Total Calories = (Fat + Carb + Protein) - Fiber

// Get Elements
const form = document.getElementById("calcForm");
const labelCals = document.getElementById("labelCals");
const totalCals = document.getElementById("totalCals");
const calDiff = document.getElementById("calDiff");
const clearBtn = document.getElementById("clear-btn");

// Submit form
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stops page reload

  // Get the values
  const inputCalories = document.getElementById("calories").value || 0;
  const inputFat = document.getElementById("fat").value || 0;
  const inputCarbs = document.getElementById("carbs").value || 0;
  const inputProtein = document.getElementById("protein").value || 0;
  const inputFiber = document.getElementById("fiber").value || 0;

  // Do the math on the numbers
  calculateCalories(
    inputCalories,
    inputFat,
    inputCarbs,
    inputProtein,
    inputFiber,
  );
});

// Add functionality to clear button
clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearForm();
  console.log("Form Cleared");
});

// Do the Math & Update Text
function calculateCalories(cals, fat, carbs, protein, fiber) {
  // Calculate the actual calories
  let totalFat = fat * 9;
  let totalCarb = carbs * 4;
  let totalProtein = protein * 4;
  let totalFiber = fiber * 4;

  let macros = totalFat + totalCarb + totalProtein;

  let totalCalculatedCalories = macros - totalFiber;

  // Calculate the difference
  let calculatedDifference = totalCalculatedCalories - cals;
  let diffOutput;
  if (calculatedDifference == 0) {
    diffOutput = calculatedDifference;
  } else if (calculatedDifference > 0) {
    diffOutput = `+ ${calculatedDifference}`;
  } else if (calculatedDifference < 0) {
    diffOutput = `- ${calculatedDifference}`;
  }

  // Update the text
  labelCals.innerText = cals;
  totalCals.innerText = totalCalculatedCalories;
  calDiff.innerText = diffOutput;
}

// Clear the form
function clearForm() {
  document.getElementById("calories").value = "";
  document.getElementById("fat").value = "";
  document.getElementById("carbs").value = "";
  document.getElementById("protein").value = "";
  document.getElementById("fiber").value = "";
}
