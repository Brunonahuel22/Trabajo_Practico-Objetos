class Aeropuerto {
    constructor(pNombre) {
      this.pNombre = pNombre;
      this.listaAviones = [];
    }
    agregarAvion(objetoTipoAvion) {
      this.listaAviones.push(objetoTipoAvion);
    }
    buscarAvion(nombreDelAvion) {
      let bandera = false;
      for (let i = 0; i < this.listaAviones.length; i++) {
        if (this.listaAviones[i].nombre == nombreDelAvion) {
          bandera = true;
        }
      }
  
      if (bandera) {
        document.write("Avión encontrado");
      } else {
        document.write("Avión no encontrado");
      }
    }
  }
  
  class Avion {
    constructor(Pnombre, Pcapacidad, Pdestino) {
      this.nombre = Pnombre;
      this.capacidad = Pcapacidad;
      this.destino = Pdestino;
      this.listaPasajeros = [];
    }
  
    abordar(pasajero) {
      if (this.listaPasajeros.length < this.capacidad) {
        this.listaPasajeros.push(pasajero);
        document.write(`El pasajero ${pasajero} ha abordado el avión.`);
      } else {
        document.write("¡El avión está lleno! No se puede abordar más pasajeros.");
      }
    }
  }
  
  const aeropuertoPrincipal = new Aeropuerto("Aeropuerto Internacional");
  const avion1 = new Avion("Vuelo001", 150, "Nueva York");
  const avion2 = new Avion("Vuelo002", 200, "París");
  const avion3 = new Avion("Vuelo004", 600, "Brasil");
  
  aeropuertoPrincipal.agregarAvion(avion1);
  aeropuertoPrincipal.agregarAvion(avion2);
  aeropuertoPrincipal.agregarAvion(avion3);
  
  avion1.abordar("Pasajero1");
  
  aeropuertoPrincipal.buscarAvion("Vuelo001");
  