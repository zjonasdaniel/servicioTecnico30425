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

let b = true;
while (b) {
  let a = prompt(
    "Bienvenido/a a nuestra tienda virtual! \n\n Producto 1\n nombre: " +
      producto1.nombre +
      "\n precio: " +
      producto1.precio +
      "\n cantidad: " +
      producto1.cantidad +
      "\n\n Producto 2\n nombre: " +
      producto2.nombre +
      "\n precio: " +
      producto2.precio +
      "\n cantidad: " +
      producto2.cantidad +
      "\n\n Producto 3\n nombre: " +
      producto3.nombre +
      "\n precio: " +
      producto3.precio +
      "\n cantidad: " +
      producto3.cantidad +
      "\n\nIngrese el nombre del producto que desea comprar: "
  );
  a = a.toUpperCase();
  if (a == "TECLADO") {
    alert(
      "Usted a seleccionado Teclado! \nCantidad de Teclados: " +
        (producto1.cantidad - 1)
    );
    b = false;
  } else if (a == "MOUSE") {
    alert(
      "Usted a seleccionado Mouse! \nCantidad de Mouses: " +
        (producto2.cantidad - 1)
    );
    b = false;
  } else if (a == "MONITOR") {
    alert("Actualmente no quedan mas Monitores!");
    b = false;
  } else {
    alert("La opcion ingresada no es correcta! Elija nuevamente...");
  }
}

const productos = [{nombre:producto1.nombre,cantidad:producto1.cantidad,precio:producto1.precio},
                   {nombre:producto2.nombre,cantidad:producto2.cantidad,precio:producto2.precio},
                   {nombre:producto3.nombre,cantidad:producto3.cantidad,precio:producto3.precio}
];

const faltaDeStock = productos.filter((item)=> item.cantidad == 0);
console.log("Es necesario actualizar el stock de el/los productos: "+ faltaDeStock[0].nombre)

for(const item of productos){
  let contenedor = document.createElement("div");
  contenedor.innerHTML=`<h3>Nombre: ${item.nombre}</h3>
                        <p>Precio: ${item.precio}</p>
                        <p>Cantidad: ${item.cantidad}</p>`;
  document.getElementById("myDIV").appendChild(contenedor);
}