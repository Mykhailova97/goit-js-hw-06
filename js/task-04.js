let counterValue = 0;
const btnDecrement = document.querySelectorAll("button")[0];
const btnIncrement = document.querySelectorAll("button")[1];
const span = document.querySelector("#value");

btnDecrement.addEventListener("click", () => {
    counterValue -= 1;
    span.textContent = counterValue;
    console.log(counterValue);
});

btnIncrement.addEventListener("click", () => {
    counterValue += 1;
     span.textContent = counterValue;
    console.log(counterValue);
});
