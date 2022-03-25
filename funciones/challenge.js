// Con ayuda de alerts y promts haremos un cajero automático
// Nos permitirá abrir una cuenta con mínimo $100
// De no ingresar el monto mínimo, no se podrá crear
// Una vez creado, se podrá ingresar o retirar dinero

let valorInicial = 0;

function initAccount(valorInicial) {
  if (valorInicial >= 100) {
    alert("Has abierto una cuenta");
  } else {
    alert("No has ingresado el monto mínimo de $100 pesos");
  }
  return valorInicial;
}

let monto = initAccount(parseInt(prompt("Ingresa tu monto inicial")));
let saldoActual = monto;

let respuesta = prompt(
  "Deseas retirar [1] o abonar[2] dinero? o salir[x]"
);

if (respuesta === "1") {
  getCash(saldoActual);
} else if (respuesta === "2") {
  depositCash(saldoActual);
}

function getCash(saldoActual) {
  // console.log("tu saldo actual" + monto);
  let retirar = parseInt(
    prompt(
      `Tu saldo actual es de ${saldoActual} pesos, ¿cuánto deseas retirar?`
    )
  );

  if (retirar <= saldoActual) {
    saldoActual = saldoActual - retirar;

    if (saldoActual === 0) {
      alert(`Tu cuenta quedo sin fondos`);
    } else {
      alert(`Tu saldo actual es de $ ${saldoActual} pesos`);
    }
  } else {
    alert("Intentas retirar un monto mayor al actual en tu cuenta");
  }
}

function depositCash(saldoActual) {
  let deposito = parseInt(prompt("Cuánto deseas depositar"));
  saldoActual = saldoActual + deposito;
  alert(`Tu saldo actual es de $ ${saldoActual} pesos`);
}
