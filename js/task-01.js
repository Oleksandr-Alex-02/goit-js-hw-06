const amount = document.querySelectorAll("#categories .item");
const number = `Number of categories: ${amount.length}`;
console.log(number);

const tatel = document.querySelectorAll(".item h2");
tatel.forEach(function (number) {
  const array = `Category: ${number.textContent}`;
  console.log(array);
  const tate = document.querySelectorAll(".item .animals .item__li");
  const arr = `Elements: ${tate.length}`;
  console.log(arr);
});
