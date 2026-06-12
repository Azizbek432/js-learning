// Salom!..
// Bu yerda sizga JavaScript dasturlash tilida 14-kun uchun topshiriqlar berilgan.
//  vaqt : 12.06.2026y 15:00 - 16:30...
// Biz codewars misollarini ishlashni va logikani o'rgandik Furqat ustozimiz bilan...



// 1-masala...

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const n = 100;

function getPrimes(n) {
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

getPrimes(n);
