// Salom! Bugun 22.04.2026y 15:00 da biz javascript o'rganishni ikkinchi kuniga yetib keldik!..Bugun haftaning chorshanba kuni!..
// Dars 15:00 dan 16:30 gacha!..Bugun boshqa bolalarga html va cssni o'rganish topshirig'i berildi..
// Men shunchaki hozir takrorlayman JavaScriptdan o'rgangan narsalarimni..

// Bu kodni geminidan function mavzusini o'rganish uchun ko'chirdim..:

// Funksiya yaratish
function salomBer(ism, stack) {
    return `Salom ${ism}, sening yo'nalishing: ${stack}!`;
}

// Funksiyani chaqirish
let xabar = salomBer("Azizbek", "Python");
console.log(xabar);


// Endi gemini menga topshiriq berdi (o'zim so'radim) function mavzusidan..
// Gemini : Vazifa: dasturchiHaqida nomli funksiya yarating.
// Bu funksiya bitta ob'ektni (masalan, people[0]) qabul qilsin.
// Funksiya ichida if yordamida tekshiring: Agar mainStack ichida "JavaScript" so'zi bo'lsa, konsolga "Bu haqiqiy frontendchi" deb chiqsin, bo'lmasa "Hali o'rganishi kerak" deb chiqsin.
// Yordam: person.mainStack.includes("JavaScript") metodidan foydalanishingiz mumkin.

// Bu vazifani qilish uchun o'tgan Day-1 papkasidagi kodlardan foydalanish kerak..:

let people = [
    {
        ism: "Azizbek",
        familiya: "Abdullayev",
        status: "Aspiring Full-Stack developer",
        mainStack: "React.js, Python"
    },
    {
        ism: "E'zozbek",
        familiya: "Ro'zibayev",
        status: "Future Web-developer",
        mainStack: "Html, CSS"
    },
    {
        ism: "Islombek",
        familiya: "Ikrombayev",
        status: "Future Web-developer",
        mainStack: "Html, CSS"
    },
    {
        ism: "Shahriyor",
        familiya: "Iskandarov",
        status: "Frontend developer",
        mainStack: "Html, CSS, JavaScript, Java"        
    },
    {
        ism: "Shahriyor",
        familiya: "Aminbayev",
        status: "Future Web-developer",
        mainStack: "Html, CSS"
    }
];


function stackniTekshir(shaxs) {
    // includes() metodi matn ichida qidiruv qiladi
    if (shaxs.mainStack.includes("React.js")) {
        return `${shaxs.ism} zamonaviy frameworkni bilar ekan! ✅`;
    } else {
        return `${shaxs.ism} hali Reactni o'rganishi kerak. 📚`;
    }
}

// 2. Funksiyani chaqiramiz
console.log(stackniTekshir(people[0])); // Azizbek uchun
console.log(stackniTekshir(people[1])); // E'zozbek uchun


// Mayli..Bo'ldi..Endi hozir html va cssni o'rganishim kerak..

// Bu kodlar yozilib tugatildi : 22.04.2026y 15:27 da..Va ustoz beradigan mashqqa o'tildi!!..