let  saldo = 0;
const historial = [];

function actualizarSaldo() {
    const saldoDiv = document.getElementById("saldo");
    saldoDiv.innerText = `Saldo: ${saldo}`;
}

function actualizarHistorial() {
    const historialTable = document.getElementById("historial");
    historialTable.innerHTML = "";
    for (let i = 0; i < historial.length; i++) {
        const transaccion = historial[i];
        const row = `
        <tr>
            <td>${transaccion.fecha.toDateString()} <b>|</b> </td>
            <td>${transaccion.tipo} <b>|</b> </td>
            <td>${transaccion.monto}</td>
        </tr>
        `;
        historialTable.innerHTML += row;
    }
}

function transaccion() {
    const montoI = document.getElementById("monto");
    const tipoS = document.getElementById("tipo");
    const monto = parseFloat(montoI.value);
    const tipo = tipoS.value;

    if (tipo === "deposito") {
        saldo += monto;
        historial.push({
            fecha: new Date(),
            tipo: "deposito",
            monto
        });
    } else if (tipo === "retiro") {
        if (saldo < monto) {
            alert("No hay saldo suficiente");
            montoI.value = "";
            return;
        }
        saldo -= monto;
        historial.push({
            fecha: new Date(),
            tipo: "retiro",
            monto
        });
    }

    actualizarSaldo();
    actualizarHistorial();
    montoI.value = "";
    tipoS.value = "";
}
