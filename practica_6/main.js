/* Cuenta bancaria Steven!*/
let cuenta = {
    saldo: 0, 
  
    depositar: function(cantidad) {
        if (cantidad > 0) {
            cuenta.saldo += cantidad;
            return `Deposito exitoso. usted a  depositado ${cantidad}. Su saldo actual es: ${cuenta.saldo}`;
        } else {
            return "Error: La cantidad a  depositar debe ser mayor a 0.";
        }
    },

    retirar: function(cantidad) {
        if (cantidad <= 0) {
            return "Error: La cantidad a retirar debe  ser mayor a 0.";
        } else if (cantidad > cuenta.saldo) {
            return "Error: Su saldo es insuficiente.";
        } else {
            cuenta.saldo -= cantidad;
            return `Retiro  exitoso. Usted a retirado ${cantidad}. Su saldo actual es: ${cuenta.saldo}`;
        }
    },

    consultarSaldo: function() {
        return `Su saldo actual es: ${cuenta.saldo}`;
    }
};

function cuentabancaria() {
    let opcion;
    do {
        opcion = prompt(
            "Bienvenido a la cuenta bancaria de Steven\n" +
            "Seleccione  una opcion:\n" +
            "1. Depositar dinero\n" +
            "2. Retirar dinero\n" +
            "3. Consultar saldo\n" +
            "4. Salir"
        );

       
        opcion = parseInt(opcion);

        switch (opcion) {
            case 1: 
                let cantidadDeposito = parseFloat(prompt("Ingrese la cantidad que va a depositar:"));
                if (!isNaN(cantidadDeposito)) {
                    alert(cuenta.depositar(cantidadDeposito));
                } else {
                    alert("Error: Ingrese un valor numerico valido.");
                }
                break;

            case 2:
                let cantidadRetiro = parseFloat(prompt("Ingrese la cantidad que desee retirar:"));
                if (!isNaN(cantidadRetiro)) {
                    alert(cuenta.retirar(cantidadRetiro));
                } else {
                    alert("Error: Ingrese un valor numerico valido.");
                }
                break;

            case 3: 
                alert(cuenta.consultarSaldo());
                break;

            case 4: 
                alert("Gracias por usar esta cuenta bancaria!!!");
                break;

            default:
                alert("Error: seleccione una opcion entre 1 y 4.");
        }
    } while (opcion !== 4);
}

window.onload = cuentabancaria;