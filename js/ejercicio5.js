/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
 */

class Persona {
  constructor(
    parametro_nombre,
    parametro_edad,
    parametro_DNI,
    parametro_sexo,
    parametro_peso,
    parametro_altura,
    parametro_anioNacimiento
  ) {
    this.nombre = parametro_nombre;
    this.edad = parametro_edad;
    this.dni = parametro_DNI;
    this.sexo = parametro_sexo;
    this.peso = parametro_peso;
    this.altura = parametro_altura;
    this.anioNacimiento = parametro_anioNacimiento;
  }
  mostrarGeneracion() {
    if (1994 <= this.anioNacimiento <= 2010) {
      document.write(`<p>Usted pertece a la generacion Z</p>`);
      document.write(`<p>Rango Caracteristico: Irreverencia</p>`);
    } else if (1981 <= this.anioNacimiento <= 1993) {
      document.write(`<p>Usted pertece a la generacion Y (millennials)</p>`);
      document.write(`<p>Rango Caracteristico: Frustracion</p>`);
    } else if (1969 <= this.anioNacimiento <= 1980) {
      document.write(`<p>Usted pertece a la generacion X</p>`);
      document.write(`<p>Rango Caracteristico: Obsesion por el exito</p>`);
    } else if (1949 <= this.anioNacimiento <= 1968) {
      document.write(`<p>Usted pertece a la generacion Baby Boom</p>`);
      document.write(`<p>Rango Caracteristico: Ambicion</p>`);
    } else if (1930 <= this.anioNacimiento <= 1948) {
      document.write(
        `<p>Usted pertece a la generacion Silent Genertion (Los niños de la posguerra)</p>`
      );
      document.write(`<p>Rango Caracteristico: Austeridad</p>`);
    }
  }
  esMayorEdad() {
    if (this.edad >= 18) {
      document.write(`<p>La persona es mayor de edad</p>`);
    } else {
      document.write(`<p>La persona no es mayor de edad</p>`);
    }
  }
  mostrarDatos() {
    document.write(`<p>Nombre: ${this.nombre}</p>`);
    document.write(`<p>Edad: ${this.edad}</p>`);
    document.write(`<p>DNI: ${this.dni}</p>`);
    document.write(`<p>Sexo: ${this.sexo}</p>`);
    document.write(`<p>Peso: ${this.peso}</p>`);
    document.write(`<p>Altura: ${this.altura}</p>`);
    document.write(`<p>Año de Nacimiento: ${this.anioNacimiento}</p>`);
  }
}

const personaEjemplo = new Persona("Juan", 25, "12345678", "H", 70, 1.75, 1998);
personaEjemplo.mostrarDatos();
personaEjemplo.mostrarGeneracion();
personaEjemplo.esMayorEdad();

