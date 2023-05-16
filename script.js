let q1 = document.querySelector("#q1");
let q2 = document.querySelector("#q2");
let q3 = document.querySelector("#q3");
let q4 = document.querySelector("#q4");
let q5 = document.querySelector("#q5");
let q6 = document.querySelector("#q6");

let button = document.querySelector(".verifica");

let resultado = document.querySelector(".total_vale");

let v1 = document.querySelector(".vale1");
let v2 = document.querySelector(".vale2");
let v3 = document.querySelector(".vale3");
let v4 = document.querySelector(".vale4");
let v5 = document.querySelector(".vale5");
let v6 = document.querySelector(".vale6");

let p1 = document.querySelector(".presente1");
let p2 = document.querySelector(".presente2");
let p3 = document.querySelector(".presente3");
let p4 = document.querySelector(".presente4");
let p5 = document.querySelector(".presente5");
let p6 = document.querySelector(".presente6");

let button_vale1 = document.querySelector(".mostrar_vale1");
let button_vale2 = document.querySelector(".mostrar_vale2");
let button_vale3 = document.querySelector(".mostrar_vale3");
let button_vale4 = document.querySelector(".mostrar_vale4");
let button_vale5 = document.querySelector(".mostrar_vale5");
let button_vale6 = document.querySelector(".mostrar_vale6");

button.addEventListener("click", () => {
    let contador = 0;

    if (q1.value == "gostoso" || q1.value == "Gostoso") {
        contador = contador + 1;
        v1.style.display = 'flex';
    }

    if (q2.value == "chata" || q2.value == "Chata") {
        contador = contador + 1;
        v2.style.display = 'flex';
    }
    
    if (q3.value == "vitor" || q3.value == "Vitor") {
        contador = contador + 1;
        v3.style.display = 'flex';
    }
    
    if (q4.value == "vitor" || q4.value == "Vitor") {
        contador = contador + 1;
        v4.style.display = 'flex';
    }
    
    if (q5.value == "eduarda" || q5.value == "Eduarda") {
        contador = contador + 1;
        v5.style.display = 'flex';
    }
    
    if (q6.value == "eduarda" || q6.value == "Eduarda") {
        contador = contador + 1;
        v6.style.display = 'flex';
    }

    resultado.innerHTML = `Você acertou ${contador} questões. Parabéns, você ganhou ${contador} vales!!`;
})


button_vale1.addEventListener("click", () => {
    p1.style.display = "block";
})

button_vale2.addEventListener("click", () => {
    p2.style.display = "block";
})

button_vale3.addEventListener("click", () => {
    p3.style.display = "block";
})

button_vale4.addEventListener("click", () => {
    p4.style.display = "block";
})

button_vale5.addEventListener("click", () => {
    p5.style.display = "block";
})

button_vale6.addEventListener("click", () => {
    p6.style.display = "block";
})