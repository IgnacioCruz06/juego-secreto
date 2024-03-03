let numeroSecreto;
let intentos;
const numerosSorteados = [];
const numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  const elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  const numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroSecreto === numeroUsuario) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${
        intentos === 1 ? "intento." : "intentos."
      }`
    );

    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    numeroUsuario > numeroSecreto
      ? asignarTextoElemento("p", "El número secreto es menor.")
      : asignarTextoElemento("p", "El número secreto es mayor.");

    limpiarInput();

    intentos++;
  }
}

function limpiarInput() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  const numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  if (numerosSorteados.length === numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles.");
    return;
  }

  if (numerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
  } else {
    numerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  limpiarInput();

  condicionesIniciales();

  document.querySelector("#reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();
