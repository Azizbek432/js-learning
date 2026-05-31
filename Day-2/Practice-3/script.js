const input = document.getElementById("input")
const submit = document.getElementById("submit")
const demo = document.getElementById("demo")

submit.addEventListener("click", () => {
    if (input.value == "Salom") {
        demo.textContent = "Salom qalaysiz?"
    }
    else if (input.value == "...") {
        demo.textContent = "Biror bir savolingiz bormi?.."
    }
    else {
        demo.textContent = "Tushunmadim..Qaytadan yozing.."
    }
})