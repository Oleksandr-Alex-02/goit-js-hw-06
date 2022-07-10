const amount = document.querySelectorAll("#categories .item");
const number = `Number of categories: ${amount.length}`;
console.log(number);

const array = document.querySelectorAll(".item ul");

array.forEach(function callbackfn(items) {
  const elementLi = items.children;
  const number = `Elements: ${elementLi.length}`;
  console.log(number);
});

const tatel = document.querySelectorAll(".item h2");

tatel.forEach(function (number) {
  const array = `Category: ${number.textContent}`;
  console.log(array);
});
