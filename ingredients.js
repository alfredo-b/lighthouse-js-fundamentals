var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("Writing a while loop that prints out the contents of ingredients");
var i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

console.log("\n"+"Writing a for loop that prints out the contents of ingredients");
// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\n"+"Writing a for loop that prints out the contents of ingredients backwards");
for (var i = ingredients.length; i > 0; i--) {
  console.log(ingredients[i]);
}
