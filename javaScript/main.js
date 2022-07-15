class producto {
  constructor(nombre, cantidad, precio) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
  }
  setnombre(a) {
    this.nombre = a;
  }
  setcantidad(a) {
    this.cantidad = a;
  }
  setprecio(a) {
    this.precio = a;
  }
}

const producto1 = new producto("Teclado", "10", "$300");
const producto2 = new producto("Mouse", "10", "$600");
const producto3 = new producto("Monitor", "0", "$20000");

const productos = [
  {
    nombre: producto1.nombre,
    cantidad: producto1.cantidad,
    precio: producto1.precio,
  },
  {
    nombre: producto2.nombre,
    cantidad: producto2.cantidad,
    precio: producto2.precio,
  },
  {
    nombre: producto3.nombre,
    cantidad: producto3.cantidad,
    precio: producto3.precio,
  },
];

const faltaDeStock = productos.filter((item) => item.cantidad == 0);
console.log(
  "Es necesario actualizar el stock de el/los productos: " +
    faltaDeStock[0].nombre
);

let contenedor1 = document.getElementById("elemento1Datos");
let contenedor2 = document.getElementById("elemento2Datos");
let contenedor3 = document.getElementById("elemento3Datos");
contenedor1.innerHTML = `<h3>Nombre: ${producto1.nombre}</h3><p>Precio: ${producto1.precio}</p><b id="cantidadElemento1">Cantidad: ${producto1.cantidad}</b>`;
contenedor2.innerHTML = `<h3>Nombre: ${producto2.nombre}</h3><p>Precio: ${producto2.precio}</p><b id="cantidadElemento2">Cantidad: ${producto2.cantidad}</b>`;
contenedor3.innerHTML = `<h3>Nombre: ${producto3.nombre}</h3><p>Precio: ${producto3.precio}</p><b id="cantidadElemento3">Cantidad: ${producto3.cantidad}</b>`;

let boton1=document.getElementById("boton1");
boton1.addEventListener("click",respuestaboton1)
function respuestaboton1(){
  if(producto1.cantidad>=1){
  producto1.cantidad= (producto1.cantidad - 1);
  let contenedoraux = document.getElementById("cantidadElemento1");
  contenedoraux.innerHTML = `Cantidad: ${producto1.cantidad}`
 }else{
  let contenedoraux = document.getElementById("cantidadElemento1");
  contenedoraux.innerHTML = `Cantidad: ${producto1.cantidad} NO HAY MA!`
 }
}

let boton2=document.getElementById("boton2");
boton2.addEventListener("click",respuestaboton2)
function respuestaboton2(){
  if(producto2.cantidad>=1){
  producto2.cantidad= (producto2.cantidad - 1);
  let contenedoraux = document.getElementById("cantidadElemento2");
  contenedoraux.innerHTML = `Cantidad: ${producto2.cantidad}`
 }else{
  let contenedoraux = document.getElementById("cantidadElemento2");
  contenedoraux.innerHTML = `Cantidad: ${producto2.cantidad} NO HAY MA!`
 }
}

let boton3=document.getElementById("boton3");
boton3.addEventListener("click",respuestaboton3)
function respuestaboton3(){
  if(producto3.cantidad>=1){
  producto3.cantidad= (producto3.cantidad - 1);
  let contenedoraux = document.getElementById("cantidadElemento3");
  contenedoraux.innerHTML = `Cantidad: ${producto3.cantidad}`
 }else{
  let contenedoraux = document.getElementById("cantidadElemento3");
  contenedoraux.innerHTML = `Cantidad: ${producto3.cantidad} (si tocas f5 asparecen mas de los otros pero de este no)`
 }
}



