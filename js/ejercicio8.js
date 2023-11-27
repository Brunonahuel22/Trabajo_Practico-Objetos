class Persona {
  constructor(pNombre, pEdad, pProfecion) {
    this.nombre = pNombre;
    this.edad = pEdad;
    this.profecion = pProfecion;
  }

  saludar() {
    document.write(`<p>Hola soy ${this.nombre} tengo ${this.edad} años y soy ${this.profecion}</p>`);
  }

  despedirse() {
    document.write("<p>Adios</p>");
  }
}

const persona1 = new Persona("Luisa", 28, "Diseñadora");


const persona2 = new Persona("Pedro", 35,"Carpintero");

persona1.saludar();
persona1.despedirse();

persona2.saludar();
persona2.despedirse();