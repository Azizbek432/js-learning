// Salom!..Bugun biz JavaScript dasturlash tilida "function"ni o'rganyapmiz..
// Dars vaqti: 13.05.2026y 15:00 - 16:30...

// function addValue(son1, son2) {
//     return son1 + son2
// }

// let natija = addValue(100, 230)

// console.log(natija)

// 1-mashq:
// funksiya nomi: fullName
// Qaytarishi kerak : John Doe

// function fullName(ism, familya) {
//     return ism + " " + familya
// }

// let natija = fullName("John", "Doe")
// console.log(natija)

// To'g'ri chiqdi..
// Lekin mukammalroq va professional versiyasi:

// function fullName(name, sure) {
//     return `${name} ${sure}`
// }

// let result = fullName("John", "Doe")

// function print(arg) {
//     console.log(arg)
// }

// print(result)

// 2-mashq:
// Funksiya nomi: calc()
// Run: calc("+", 34, 78)
// Run: calc("-", 34, 78)
// Run: calc("*", 34, 78)
// Run: calc("/", 34, 78)

function calc(hint, son1, son2) {
    if (hint === "+") {
        return son1 + son2
    } else if (hint === "-") {
        return son1 - son2
    } else if (hint === "*") {
        return son1 * son2
    } 
};

let natija = calc("+", 23, 78)

function print() {
    console.log(natija)
}

print(natija)

