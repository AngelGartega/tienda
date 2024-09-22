// Arreglo de productos
const productos = [
    { id: 1, nombre: 'Camisa', precio: 300 },
    { id: 2, nombre: 'Pantalón', precio: 500 },
    { id: 3, nombre: 'Zapatos', precio: 600 },
    { id: 4, nombre: 'Sombrero', precio: 350 }
];
// Este arreglo contiene los productos disponibles en la tienda.
// Cada producto es un objeto con un id, nombre y precio.

// Carrito de compras
let carrito = []; // Inicializa un arreglo vacío para almacenar los productos seleccionados

// Función para agregar un producto al carrito
const agregarAlCarrito = (productoId) => {
    // Busca el producto en el arreglo usando su id
    const producto = productos.find(p => p.id === productoId);
    
    // Comprueba si el producto fue encontrado
    if (producto) {
        carrito.push(producto); // Agrega el producto al carrito
        console.log(`Producto "${producto.nombre}" agregado al carrito.`);         
        alert(`${producto.nombre} agregado al carrito. Precio: $${producto.precio}`); 
    } else {
        console.log("Producto no encontrado");         
        alert("Producto no encontrado"); 
    }
};

// Función para mostrar el contenido del carrito y calcular el total
const verCarritoYTotal = () => {
    // Verifica si el carrito está vacío
    if (carrito.length === 0) {
        console.log("El carrito está vacío");         
        alert("El carrito está vacío"); 
    } else {
        let total = 0; // Inicializa el total en 0
        let carritoDetalle = "Productos en el carrito:\n"; // Mensaje inicial para listar los productos
        
        // Recorre los productos en el carrito para construir el detalle
        carrito.forEach((producto, index) => {
            // Agrega cada producto y su precio al mensaje del carrito
            carritoDetalle += `${index + 1} - ${producto.nombre}: $${producto.precio}\n`;
            total += producto.precio; // Suma el precio del producto al total
        });

        // Agrega el total al mensaje del carrito
        carritoDetalle += `\nTotal a pagar: $${total}`; // Mensaje del total a pagar
        console.log(carritoDetalle);       
        alert(carritoDetalle); 
    }
};

// Función principal para simular la tienda en un alert
const tienda = () => {
    let opcion = ''; // Inicializa la opción seleccionada por el usuario
    do {
        // Muestra un menú de opciones al usuario mediante un prompt
        opcion = prompt(`
            Selecciona un prodcuto para agregar al carrito:
            1. Camisa - $300
            2. Pantalón - $500
            3. Zapatos - $600
            4. Sombrero - $350
            5. Ver carrito y total
            6. Salir
        `);

        // Evalúa la opción seleccionada por el usuario
        switch (opcion) {
            case '1': 
                agregarAlCarrito(1); 
                break;
            case '2': 
                agregarAlCarrito(2); 
                break;
            case '3': 
                agregarAlCarrito(3); 
                break;
            case '4': 
                agregarAlCarrito(4); 
                break;
            case '5': 
                verCarritoYTotal(); // Muestra el contenido del carrito y el total
                break;
            case '6': 
                console.log("Saliendo de la tienda...");               
                alert("Saliendo de la tienda..."); 
                break;
            case null:  // Caso cuando se presiona "Cancelar" en el prompt
                console.log("Has cancelado la selección.");                 
                alert("Has cancelado la selección."); 
                opcion = '6'; // Cambia la opción para salir del bucle
                break;
            default: // Para cualquier otra opción no válida
            console.log("Opción no válida");               
            alert("Opción no válida"); 
        }
    } while (opcion !== '6'); // Continúa el bucle hasta que el usuario elija salir
};

// Iniciar la tienda
// Esperar a que el contenido de la página se haya cargado completamente
document.addEventListener('DOMContentLoaded', () => {
    tienda(); // Llama a la función tienda para iniciar la simulación
});