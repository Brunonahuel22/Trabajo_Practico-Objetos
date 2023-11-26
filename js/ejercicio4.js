/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
 */

class Productos {
  constructor(parameto_codigo, parameto_nombre, parameto_precio) {
    this.codigo = parameto_codigo;
    this.nombre = parameto_nombre;
    this.precio = parameto_precio;
  }

  ImprimirDatos() {
    document.write(`<p>El código del producto es: ${this.codigo}</p>`);
    document.write(`<p>El nombre del producto es: ${this.nombre}</p>`);
    document.write(`<p>El precio del producto es: ${this.precio}</p>`);
  }
}

const mayonesa = new Productos(4300 ,'Helmans', 700);
const gaseosaCocaRet = new Productos(4800 ,'Coca Cola Ret', 850);
const Ades = new Productos(4700 ,'Ades Chico', 400);


const ArregloProductos = [mayonesa,gaseosaCocaRet,Ades];

let longitud = ArregloProductos.length;

for (let i = 0; i < longitud; i++) {
    document.write(`---Producto ${i + 1} ------ `)
    ArregloProductos[i].ImprimirDatos();
}

