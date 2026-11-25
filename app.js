const express = require('express');
const app = express();

app.use(express.json());

// Ruta GET
app.get('/api/productos', (req, res) => {
    const productos = [
        { nombre: "Laptop", precio: 8500 },
        { nombre: "Mouse", precio: 250 },
        { nombre: "Teclado", precio: 500 }
    ];

    res.json(productos);
});

// Ruta POST
app.post('/api/productos', (req, res) => {
    const producto = req.body;

    res.json({
        mensaje: "Producto recibido",
        producto: producto
    });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log("Servidor activo en el puerto 3000");
});

console.log("Proyecto actualizado");