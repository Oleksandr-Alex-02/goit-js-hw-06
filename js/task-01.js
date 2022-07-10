// const amount = document.querySelectorAll("#categories .item");
// const number = `Number of categories: ${amount.length}`;
// console.log(number);

// const tatel = document.querySelectorAll(".item h2");
// const array = document.querySelectorAll(".item ul");

// array.forEach(
//   function callbackfn(items) {
//     const elementLi = items.children;
//     const number = `Elements: ${elementLi.length}`;
//     console.log(number);
//   },
//   tatel.forEach(function callbackfn(number) {
//     const array = `Category: ${number.textContent}`;
//     console.log(array);
//   })
// );

const categories = document.querySelector("#categories");
console.log(categories);
const categ = categories.querySelector(".item");
console.log(categ);
const cat = categ.querySelectorAll("li").length;
console.log(cat);
