const inp1 = document.getElementById("inp1");
const inp2 = document.getElementById("inp2");
const calc = document.getElementById("calc");
const result = document.getElementById("result");

calc.addEventListener("click", () => {
    let num1 = Number(inp1.value);
    let num2 = Number(inp2.value);

    let a = num1;
    let b = num2;

    let r = a + b;
    result.textContent = `Natija: ${r}`;
})