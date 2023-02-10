const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result');

// form.addEventListener('submit', sumaInputValues);

// function sumaInputValues(event) {
//     console.log({event});
//     event.preventDefault();
//     const sumaInputs = input1.value + input2.value;
//     pResult.innerText = "Resultado " + sumaInputs;
// }


btn.addEventListener('click', sumaInputValues);

function sumaInputValues(event) {
    // console.log({event});
    // event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado " + sumaInputs;
}

/*Broma que al pasar el mouse sale la alerta de virus*/
// form.addEventListener("mouseover", enviarFormulario)

// function enviarFormulario(e){
//     e.preventDefault();

//     alert("virus")
// }