/*let number = 4;

console.log(number);

number = 12;
console.log(number);

let a = 1 + "1" - 1;
console.log(a);

const userAge = confirm("Yoshiz 18 dami ");
console.log(userAge);
*/
"use strict";

const numberOfNews = +prompt("Siz qancha ko'rdingiz");

const personalDB = {
  count: numberOfNews,
  actors: {},
  news: {},
  genres: [],
  privat: false,
};

const a = prompt("Oxirgi yangilik"),
  b = prompt("Unga baho bering");

personalDB.news[a] = b;
personalDB.actors[b] = a;
console.log(personalDB);
