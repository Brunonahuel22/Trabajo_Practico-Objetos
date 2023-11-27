/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

 */

class Libro {
  #isbn;
  #titulo;
  #autor;
  #paginas;
  constructor(para_isbn, para_titulo, para_autor, para_paginas) {
    this.#isbn = para_isbn;
    this.#titulo = para_titulo;
    this.#autor = para_autor;
    this.#paginas = para_paginas;
  }
  //get y set
  get isbn() {
    return this.#isbn;
  }

  set isbn(nuevo_valor) {
    this.#isbn = nuevo_valor;
  }

  get titulo() {
    return this.#titulo;
  }
  set titulo(nuevo_valor) {
    this.#titulo = nuevo_valor;
  }

  get autor() {
    return this.#autor;
  }
  set autor(nuevo_valor) {
    this.#autor = nuevo_valor;
  }

  get paginas() {
    return this.#paginas;
  }
  set paginas(nuevo_valor) {
    this.#paginas = nuevo_valor;
  }

  //metodo

  mostrarlibro(){
    document.write(`<h2>El libro ${this.titulo} con ISBN ${this.#isbn} creado por el autor ${this.#autor} tiene ${this.#paginas} paginas.</h2>`);
  }
}


const miLibro = new Libro('121242523','JavaScript para todos','Bruno Cordoba',256);
miLibro.mostrarlibro();
