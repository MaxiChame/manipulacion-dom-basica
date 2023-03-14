const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");

// let btnSuma = () => {
// let resultado = (parseInt(input1.value) + parseInt(input2.value));
// const rst = document.querySelector("#resultado")
// rst.innerText = resultado;
// }

form.addEventListener("submit", formOnClick);

function formOnClick(event) {
    console.log({event});
    event.preventDefault();
    const resultado  = (parseInt(input1.value) + parseInt(input2.value));
    const rst = document.querySelector("#resultado")
    rst.innerText = resultado;
}
