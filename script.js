const title = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btncalcular");
const p = document.querySelector("p")

btn.addEventListener("click", btnOnClick);

function btnOnClick () {
    const sumaInput = Number(input1.value)  + Number(input2.value)
    p.innerText = "Resultado: "+ sumaInput;
}
