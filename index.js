const productos = [
    { nombre: "cuerina ", precio: 2300 },
    { nombre: "vinilo ", precio: 1250 },
    { nombre: "lona front ", precio: 1150 },
    { nombre: "lona back ", precio: 1500 },
    { nombre: "lona Bo ", precio: 1250 },
];

let carrito = []

let seleccion = prompt("Bienvenido a Zona CMYK, desea comprar algun producto si o no")

while (seleccion != "si" && seleccion != "no") {
    alert("por favor ingrese si o no")
    seleccion = prompt("hola  desea comprar algo si o no")
}

if (seleccion == "si") {

    let todoslosproductos = productos.map((producto) => producto.nombre + "" + producto.precio + " $ ");

    alert(todoslosproductos.join(" / "))
} else if (seleccion == "no") {
    alert("gracias por elegirnos")
}
while(seleccion != "no"){
    let producto = prompt("agregar un producto")
    let precio = 0

    if (producto == "cuerina" || producto == "vinilo" || producto == "lona front" || producto == "lona back" || producto == "lona Bo") {
        switch(producto) {
            case " cuerina":
                precio = 2300;
                break;
            case " vinilo":
                precio = 1250;
                break;
            case " lona front":
                precio = 1150;
                break;
            case " lona back":
                precio = 1500;
                break;
            case " lona Bo":
                precio = 1250;
                break;
            default:
                break;
        }

        let unidadades = parseInt(prompt("cuantas quiere"))


        carrito.push({ producto, unidadades, precio })
        console.log(carrito)
    } else {
        alert("no tenemos ese produto")
    }
    seleccion = prompt("desea seguir comprando")

    while(seleccion === "no"){
        alert("gracias por elegirnos, nos vemos la proxima")
        carrito.forEach((carritofinal) => {
            console.log(`producto: ${carritofinal.producto}, unidad ${carritofinal.unidadades}, total${carritofinal.unidadades* carritofinal.precio}`)
        })
     break;
    }
  
}

const total = carrito.reduce((acc, el) => acc + el.unidades * el.precio, 0)


console.log(`el total es: ${total}`)


