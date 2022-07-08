const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach(function callback(element) {
  const newLi = document.createElement("li");
  newLi.classList.add("item");
  newLi.textContent = element;
  console.log(newLi);
});
