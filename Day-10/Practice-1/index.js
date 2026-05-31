// Salom..
// Bu kodlar azizbek tomonidan 25.05.2026y 15:00-16:30 da yozildi.
// Bugun array o'rganamiz.Bu yerda misollar...(va ozgina map()ni ham...)

// const mevalar = [
//   { nom: 'Olma', narx: 100 },
//   { nom: 'Banan', narx: 50 },
//   { nom: 'Uzum', narx: 150 }
// ];

// const arzonMevalar = mevalar
//   .filter(m => m.narx < 120) // Faqat Olma va Bananni oladi
//   .map(m => m.nom.toUpperCase()); // ['OLMA', 'BANAN']

// console.log(arzonMevalar);

// const sonlar = [1, 2, 3, 4];
// const kvadratlar = sonlar.map(son => son * son);

// console.log(kvadratlar); // [1, 4, 9, 16]

// const yoshlar = [12, 18, 25, 30, 15];
// const kattalar = yoshlar.filter(yosh => yosh >= 18);

// console.log(kattalar); // [18, 25, 30]


// // 1. forEach
// arr.forEach((item) => {
//   console.log(item);
// });

// // 2. map
// let newArr = arr.map((item) => item * 2);
// console.log(newArr);

// // 3. filter
// let filteredArr = arr.filter((item) => item % 2 === 0);
// console.log(filteredArr);

// // 4. reduce
// let sum = arr.reduce((acc, item) => acc + item, 0);
// console.log(sum);

// // 5. find
// let foundItem = arr.find((item) => item > 3);
// console.log(foundItem);

// // 6. some
// let hasEven = arr.some((item) => item % 2 === 0);
// console.log(hasEven);

// // 7. every
// let allPositive = arr.every((item) => item > 0);
// console.log(allPositive);

// // 8. includes
// let includesThree = arr.includes(3);
// console.log(includesThree);

// // 9. indexOf
// let indexOfFour = arr.indexOf(4);
// console.log(indexOfFour);

// // 10. slice
// let slicedArr = arr.slice(1, 4);
// console.log(slicedArr);

// // 11. toString
// let arrString = arr.toString();
// console.log(arrString);

// // 12. join
// let joinedArr = arr.join("-");
// console.log(joinedArr);

// // 13. sort
// let sortedArr = arr.sort((a, b) => b - a);
// console.log(sortedArr);

// // 14. reverse
// let reversedArr = arr.reverse();
// console.log(reversedArr);

// // 15. concat
// let anotherArr = [6, 7, 8];
// let concatenatedArr = arr.concat(anotherArr);
// console.log(concatenatedArr);

// // 16. flat
// let nestedArr = [1, [2, 3], [4, [5]]];
// let flatArr = nestedArr.flat(2);
// console.log(flatArr);

// // 17. fill
// arr.fill(0);
// console.log(arr);

// // 18. copyWithin
// arr.copyWithin(0, 3);
// console.log(arr);

// // 19. entries
// for (let [index, value] of arr.entries()) {
//   console.log(index, value);
// }

// // 20. keys
// for (let key of arr.keys()) {
//   console.log(key);
// }

// // 21. values
// for (let value of arr.values()) {
//   console.log(value);
// }   