/* 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto. */

const auto = {
  color: "rojo",
  marca: "Chevrolet",
  modelo: "ONIX SEDÁN",
  estado: 0,  //uso 0 para apagado y 1 para encendido
  //metodos
  encender: function() {
    if (this.estado == 0) {
        this.estado = 1;
        document.write('<p>El auto esta encendido</p>')
    }
  },
  apagar: function() {
    if (this.estado == 1) {
        this.estado = 0;
        document.write('<p>El auto esta apagado</p>')
    }
  },
}

auto.encender();


