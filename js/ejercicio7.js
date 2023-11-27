class Contacto {
  #nombre;
  #tel;
  constructor(paraNombre, paraTEL) {
    this.#nombre = paraNombre;
    this.#tel = paraTEL;
  }
  // get y set
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoValor) {
    this.#nombre = nuevoValor;
  }
  get tel() {
    return this.#tel;
  }
  set tel(nuevoValor) {
    this.#tel = nuevoValor;
  }
  //metodos
  esIgual(otroContacto) {
    if (this.nombre == otroContacto.nombre) {
      return document.write("Ese contacto con ese nombre ya existe");
    }
  }
}

class Agenda {
  #tamanio;
  #contactos;
  constructor(tama = 10) {
    this.#contactos = [];
    this.#tamanio = tama;
  }

  //get y set
  get contactos() {
    return this.#contactos;
  }
  set contactos(nuevo_valor) {
    this.#contactos = nuevo_valor;
  }
  get tamanio() {
    return this.#tamanio;
  }
  set tamanio(nuevo_valor) {
    this.#tamanio = nuevo_valor;
  }

  //metodos
  aniadirContacto(Contacto) {
    if (this.#contactos.length < this.tamanio) {
      this.#contactos.push(Contacto);
      document.write(`<p>CONTACTO AGREGADO</p>`);
    } else {
      document.write(`<p>No se pudó agregar mas contactos, lista llená</p>`);
    }
  }
  existeContacto(contacto) {
    let longitud;
    let bandera = 0;
    longitud = this.#contactos.length;
    for (let i = 0; i < longitud; i++) {
      if (this.#contactos[i] == contacto) {
        bandera = 1;
      }
    }

    if (bandera == 1) {
      document.write("<p>Ya existe un contacto con ese nombre</p>");
    } else {
      document.write("<p>No existe este contacto</p>");
    }
  }

  listarContactos() {
    console.log("Lista de contactos:");
    for (let i = 0; i < this.#contactos.length; i++) {
      console.log(`<p>Contacto ${i + 1} </p>`);
      console.log(`<p>Nombre: ${this.#contactos[i].nombre}</p>`);
      console.log(`<p>Telefono: ${this.#contactos[i].tel}</p>`);
    }
  }

  buscarContacto(nombre) {
    let contactoEncontrado = null;

    for (let i = 0; i < this.contactos.length; i++) {
      if (this.contactos[i].nombre === nombre) {
        contactoEncontrado = this.contactos[i];
        break;
      }
    }

    if (contactoEncontrado) {
      console.log(`Teléfono de ${nombre}: ${contactoEncontrado.telefono}`);
    } else {
      console.log(`No se encontró ningún contacto con el nombre ${nombre}.`);
    }
  }

  eliminarContacto(contacto) {
    let indice = -1;

    for (let i = 0; i < this.contactos.length; i++) {
      if (this.contactos[i].nombre === contacto.nombre) {
        indice = i;
        break;
      }
    }

    if (indice !== -1) {
      delete this.contactos[i];
      console.log("Contacto eliminado correctamente.");
    } else {
      console.log("No se encontró ningún contacto para eliminar.");
    }
  }

  agendaLlena() {
    let longitud;
    longitud = this.#contactos.length;
    if (longitud == this.#tamanio) {
      document.write(`<p>La agenda esta llena</p>`);
    } else {
      document.write(`<p>La agenda no esta llena aun</p>`);
    }
  }

  huecosLibres() {
    let longitud;
    longitud = this.#contactos.length;

    let tamanioDisponible;

    tamanioDisponible = this.#tamanio - longitud;

    return tamanioDisponible;
  }
}


const agenda = new Agenda();



  let opcion;

  do {
  
    opcion = prompt(`
      Menú de Agenda:
      1. Añadir contacto
      2. Comprobar existencia de contacto
      3. Listar contactos
      4. Buscar contacto
      5. Eliminar contacto
      6. Verificar si la agenda está llena
      7. Verificar huecos libres
      8. Salir
    `);

    
    switch (opcion) {
      case "1":
        const nombre = prompt("Ingrese el nombre del contacto:");
        const telefono = prompt("Ingrese el teléfono del contacto:");
        const nuevoContacto = new Contacto(nombre, telefono);
        agenda.aniadirContacto(nuevoContacto);
        break;
      case "2":
        const nombreExistente = prompt("Ingrese el nombre a comprobar:");
        agenda.existeContacto(nombreExistente);
        break;
      case "3":
        agenda.listarContactos();
        break;
      case "4":
        const nombreABuscar = prompt(
          "Ingrese el nombre del contacto a buscar:"
        );
        agenda.buscarContacto(nombreABuscar);
        break;
      case "5":
        const nombreAEliminar = prompt(
          "Ingrese el nombre del contacto a eliminar:"
        );
        const contactoAEliminar = new Contacto(nombreAEliminar, "");
        agenda.eliminarContacto(contactoAEliminar);
        break;
      case "6":
        agenda.agendaLlena();
        break;
      case "7":
        console.log(`Huecos libres en la agenda: ${agenda.huecosLibres()}`);
        break;
      case "8":
        console.log("Saliendo del programa. ¡Hasta luego!");
        break;
      default:
        console.log("Opción no válida. Por favor, ingrese una opción válida.");
    }
  } while (opcion !== "8");



