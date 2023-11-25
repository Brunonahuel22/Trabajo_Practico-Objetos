/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
 */

class Rectangulos {
  constructor(alto_ingresar, ancho_ingresar) {
    this.alto = alto_ingresar;
    this.ancho = ancho_ingresar;
  }

  //metodos
  aumentarAlto(nuevo_alto) {
    this.alto += nuevo_alto;
  }
  aumentarAncho(nuevo_ancho) {
    this.ancho += nuevo_ancho;
  }
  mostrarDatos() {
    document.write(`<p>El alto es de: ${this.alto} </p>`);
    document.write(`<p>El ancho es de: ${this.ancho} </p>`);
  }
  perimetro() {
    document.write(`<p>El perimetro es de: ${(this.alto) + (this.ancho) +(this.alto) + (this.ancho)  } </p>`);
  }
  area() {
    document.write(`<p>El area es de: ${(this.alto) * (this.ancho)} </p>`);
  }
}

const rectangulo1 = new Rectangulos(5,10);

rectangulo1.mostrarDatos();

rectangulo1.aumentarAlto(10);
rectangulo1.aumentarAncho(15);

rectangulo1.mostrarDatos();

rectangulo1.perimetro();
rectangulo1.area();

