/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
 */

const cuenta = {
  titular: "alex",
  saldo: 0,
  ingresar: function (dinero_a_ingresar) {
    if (dinero_a_ingresar > 0) {
      this.saldo += dinero_a_ingresar;
      document.write("<p>Dinero Ingresado Correctamente</p>");
    } else {
      document.write("<p>Se debe ingresar un monto mayor a 0$</p>");
    }
  },
  extraer: function (dineroExtraer) {
    if (dineroExtraer > 0 && dineroExtraer <= this.saldo) {
      this.saldo -= dineroExtraer;
      document.write("<p>Dinero extraido correctamente</p>");
    } else {
      document.write("<p>Monto insuficiente</p>");
    }
  },
  informar: function () {
    document.write(`<p>Titular: ${this.titular}</p>`);
    document.write(`<p>Saldo actual: ${this.saldo}</p>`);
  },
};

document.write("<p>Estado inicial de la cuenta:</p>");
cuenta.informar();

cuenta.ingresar(100);
document.write("<p>Después de ingresar dinero:</p>");
cuenta.informar();

cuenta.extraer(30);
document.write("<p>Después de extraer dinero:</p>");
cuenta.informar();
