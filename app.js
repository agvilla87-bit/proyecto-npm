const express = require('express');
const app = express();

app.use(express.json());

// Página principal
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Mi proyecto</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body style="font-family: Arial; text-align: center; padding: 40px;">
            <h1>¡Mi proyecto funciona!</h1>
            <p>Bienvenido a mi aplicación.</p>
            <p>API de productos disponible.</p>
            <a href="/api/productos">Ver productos</a>
        </body>
        </html>
    `);
});

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

// Servidor local
if (require.main === module) {
    app.listen(3000, () => {
        console.log("Servidor activo en el puerto 3000");
    });
}

// Exportar aplicación para Vercel
module.exports = app;
