// Salom!..
// Dars vaqti: 01.06.2026y 15:00 - 16:30...
// Practice-2 da amaliy mashq!..Ko'rib chiqing..

// Mashq: Massiv yaratib, uning ichidagi juft sonlarni yig'indisini hisoblash...
let sonlar = [24, 7, 13, 41, 8, 16]

let juftSonlar = sonlar.filter(son => son % 2 === 0)
let natija = juftSonlar.reduce((a, b) => a + b, 0)

console.log(natija) // 48

// Bajarildi!..(lekin tog'ri yo'l bilan qildimmi..Bilmadim..lekin kod ishlayapti!..)

