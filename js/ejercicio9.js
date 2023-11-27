class Animal{
    constructor(pNombre,pEdad){
        this.nombre = pNombre;
        this.pEdad = pEdad;
    }

    emitirSonido(){
        document.write("<p>Sonido de animal</p>")
    }
}

class Perrico extends Animal{
    constructor(pNombre,pEdad,apodo){
        super(pNombre,pEdad);
        this.apodo = apodo;
    }

    emitirSonido() {
        document.write("<p>Guau guau!</p>");
      }
}

class Gatico extends Animal{
    constructor(pNombre,pEdad,color){
        super(pNombre,pEdad);
        this.color = color;
    }

    emitirSonido() {
        document.write("<p>Miau!</p>");
      }
}


const miPerro = new Perrico("Lala", 9, "Pato");
const miGato = new Gatico("Boris", 5, "Blanco");


miPerro.emitirSonido(); 
miGato.emitirSonido();  