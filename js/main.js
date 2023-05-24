
// PRODUCTOS

const  productos =  [


    // Computadoras
    {
        id : "computadora" ,
        titulo : "Computadora" ,
        imagen : "./img/computadoras/compu1.jpg" ,
        categoría : {
            nombre : "Computadora" ,
            id : "computadoras"
        } ,
        precio : 500
    } ,
    {
        id : "computadora" ,
        titulo : "Computadora" ,
        imagen : "./img/computadoras/compu2.jpg" ,
        categoría : {
            nombre : "Computadora" ,
            id : "computadoras"
        } ,
        precio : 600
    } ,
    {
        id : "computadora" ,
        titulo : "Computadora" ,
        imagen : "./img/computadoras/compu3.jpg" ,
        categoría : {
            nombre : "Computadora" ,
            id : "computadoras"
        } ,
        precio : 700
    } ,
    {
        id : "computadora" ,
        titulo : "Computadora" ,
        imagen : "./img/computadoras/compu4.jpg" ,
        categoría : {
            nombre : "Computadora" ,
            id : "computadoras"
        } ,
        precio : 800
    } ,
    {  
        id : "computadora" ,
        titulo : "Computadora" ,
        imagen : "./img/computadoras/compu5.jpg" ,
        categoría : {
            nombre : "Computadora" ,
            id : "computadoras"
        } ,
        precio : 900
    } ,
    {
        id : "computadora" ,
        titulo : "Computadora" ,
        imagen : "./img/computadoras/compu6.jpg" ,
        categoría : {
            nombre : "Computadora" ,
            id : "computadoras"
        } ,
        precio : 1000
    } ,


    // Redes y Energia
    {
        id : "redes" ,
        titulo : "Redes" ,
        imagen : "./img/redes/redes1.jpg" ,
        categoría : {
            nombre : "Redes" ,
            id : "redes"
        } ,
        precio : 50
    } ,
    {
        id : "redes" ,
        titulo : "Redes" ,
        imagen : "./img/redes/redes2.jpg" ,
        categoría : {
            nombre : "Redes" ,
            id : "redes"
        } ,
        precio : 50
    } ,
    {
        id : "redes" ,
        titulo : "Redes" ,
        imagen : "./img/redes/redes3.jpg" ,
        categoría : {
            nombre : "Redes" ,
            id : "redes"
        } ,
        precio : 20
    } ,
    {
        id : "redes" ,
        titulo : "Redes" ,
        imagen : "./img/redes/redes4.jpg" ,
        categoría : {
            nombre : "Redes" ,
            id : "redes"
        } ,
        precio : 20
    } ,
    {
        id : "redes" ,
        titulo : "Redes" ,
        imagen : "./img/redes/redes5.jpg" ,
        categoría : {
            nombre : "Redes" ,
            id : "redes"
        } ,
        precio : 20
    } ,
    {
        id : "redes" ,
        titulo : "Redes" ,
        imagen : "./img/redes/redes6.jpg" ,
        categoría : {
            nombre : "Redes" ,
            id : "redes"
        } ,
        precio : 20
    } ,


    // Cables y convertidores
    {
        id : "cables" ,
        titulo : "Cables" ,
        imagen : "./img/cables/cables1.jpg" ,
        categoría : {
            nombre : "Cables" ,
            id : "cables"
        } ,
        precio : 10
    } ,
    {
        id : "cables" ,
        titulo : "Cables" ,
        imagen : "./img/cables/cables2.jpg" ,
        categoría : {
            nombre : "Cables" ,
            id : "cables"
        } ,
        precio : 5
    } ,
    {
        id : "cables" ,
        titulo : "Cables" ,
        imagen : "./img/cables/cables3.jpg" ,
        categoría : {
            nombre : "Cables" ,
            id : "cables"
        } ,
        precio : 5
    } ,
    {
        id : "cables" ,
        titulo : "Cables" ,
        imagen : "./img/cables/cables4.jpg" ,
        categoría : {
            nombre : "Cables" ,
            id : "cables"
        } ,
        precio : 5
    } ,
    {
        id : "cables" ,
        titulo : "Cables" ,
        imagen : "./img/cables/cables5.jpg" ,
        categoría : {
            nombre : "Cables" ,
            id : "cables"
        } ,
        precio : 10
    } ,
    {
        id : "cables" ,
        titulo : "Cables" ,
        imagen : "./img/cables/cables6.jpg" ,
        categoría : {
            nombre : "Cables" ,
            id : "cables"
        } ,
        precio : 10
    },


    //Audio y auriculares
    {
        id : "audios" ,
        titulo : "Audio" ,
        imagen : "./img/audio/audio1.jpg" ,
        categoría : {
            nombre : "Audio" ,
            id : "audios"
        } ,
        precio : 20
    } ,
    {
        id : "audios" ,
        titulo : "Audio" ,
        imagen : "./img/audio/audio2.jpg" ,
        categoría : {
            nombre : "Audio" ,
            id : "audios"
        } ,
        precio : 30
    } ,
    {
        id : "audios" ,
        titulo : "Audio" ,
        imagen : "./img/audio/audio3.jpg" ,
        categoría : {
            nombre : "Audio" ,
            id : "audios"
        } ,
        precio : 30
    } ,
    {
        id : "audios" ,
        titulo : "Audio" ,
        imagen : "./img/audio/audio4.jpg" ,
        categoría : {
            nombre : "Audio" ,
            id : "audios"
        } ,
        precio : 20
    } ,
    {
        id : "audios" ,
        titulo : "Audio" ,
        imagen : "./img/audio/audio5.jpg" ,
        categoría : {
            nombre : "Audio" ,
            id : "audios"
        } ,
        precio : 20
    } ,
    {
        id : "audios" ,
        titulo : "Audio" ,
        imagen : "./img/audio/audio6.jpg" ,
        categoría : {
            nombre: "Audio",
            id: "audios"
        } ,
        precio: 800
    } 
] ;




const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numero = document.querySelector("#numero");



function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";             /*hace que se basie el contenedorProductos para que no se dupliquen las imagenes*/

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
         div.classList.add("producto");
             div.innerHTML = `
             <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">${producto.precio}</p>
                    <button class="producto-agregar" id="${producto.id}">Agregar</button>
                </div>
            `;

        contenedorProductos.append(div);  
    })

    actualizarBotonesAgregar();
} 

cargarProductos(productos);  


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoría.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoría.nombre;

              const productosBoton = productos.filter(producto => producto.categoría.id === e.currentTarget.id);
              cargarProductos(productosBoton);
        } else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })

});


function actualizarBotonesAgregar( ) {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlcarrito);
    });
}


const productosEnCarrito = [];

function agregarAlcarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton);

  if(productosEnCarrito.some(producto => producto.id === idBoton)) {
     const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
     productosEnCarrito[index].cantidad++;
  } else {
  productoAgregado.cantidad = 1;
  productosEnCarrito.push(productoAgregado);
  }

  actualizarNumero();

  localStorage.setItem("productos-en-carrito" , JSON.stringify(productosEnCarrito));

}


function actualizarNumero() {
    let nuevoNumero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numero.innerText = nuevoNumero;

}
