const categories = document.querySelector("#categories");
const number = categories.querySelectorAll(".item");
const numbe = `Number of categories: ${number.length}`;
console.log(numbe);

const categ = categories.querySelectorAll(".item");

categ.forEach(function callbackfn(items) {
  const amos = items.querySelector("h2");
  const array = `Category: ${amos.textContent}`;
  console.log(array);

  const amount = items.querySelectorAll("li");
  const number = `Elements: ${amount.length}`;
  console.log(number);
});
