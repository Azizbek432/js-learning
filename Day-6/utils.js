// VAZIFA..
// Dars vaqti: 13.05.2026y 15:00 - 16:30...

const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const num3 = document.getElementById("num3")
const num4 = document.getElementById("num4")
const num5 = document.getElementById("num5")
const num6 = document.getElementById("num6")
const num7 = document.getElementById("num7")
const num8 = document.getElementById("num8")
const add = document.getElementById("add")
const sub = document.getElementById("sub")
const mul = document.getElementById("mul")
const div = document.getElementById("div")
const result = document.getElementById("result")
const result_2 = document.getElementById("result_2")
const result_3 = document.getElementById("result_3")
const result_4 = document.getElementById("result_4")

add.addEventListener("click", () => {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);

    function add(a, b) {
        return a + b
    }

    let r = add(n1, n2)
    result.textContent = r;
})

sub.addEventListener("click", () => {
    let n3 = Number(num3.value);
    let n4 = Number(num4.value);

    function add(c, d) {
        return c - d
    }

    let r2 = add(n3, n4)
    result_2.textContent = r2;
})

mul.addEventListener("click", () => {
    let n5 = Number(num5.value);
    let n6 = Number(num6.value);

    function add(e, f) {
        return e * f
    }

    let r3 = add(n5, n6)
    result_3.textContent = r3;
})

div.addEventListener("click", () => {
    let n7 = Number(num7.value);
    let n8 = Number(num8.value);

    function add(e, f) {
        return e / f
    }

    let r4 = add(n7, n8)
    result_4.textContent = r4;
})
