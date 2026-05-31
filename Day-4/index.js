// Salom!..Bugun biz JavaScript dasturlash tilida "for" siklidan foydalanishni o'rganamiz. "for" sikli, biror amalni takrorlash uchun ishlatiladi. Misol uchun, biz 1 dan 1 milliongacha bo'lgan sonlarni konsolga chiqarish uchun "for" siklidan foydalanamiz.
// Dars vaqti: 04.05.2026y 15:00 - 16:30...

// let finish = 1000000;
// for (let i = 1; i <= finish; i++)  {
//     console.log(i);
// }

// Mashq:
// 1kg konfet 21000 so'm.
// Topshiriq : 1kg dan 10kg gacha bo'lgan konfetlarni summasini toping.

// let narx = 21000;
// let summa = 0;

// for (let i = 0; i <= 10; i++) {
//     summa += narx * i;
// }

// console.log(summa);

// Mashq:

let pul = 1000000; // Omonatga qo'yish summasi
let n = 12; // 12 oy
let jami = pul * 0.2; // Bank omonat foizi summasi
let oy = jami / n; // Bir oyda bo'ladigan summa

for (let i = 1; i <= n; i++) {
    pul += oy;
    
    console.log(`${i}-oy ${pul.toFixed(2)} so'm`);
}