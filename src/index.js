const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes')
 

const app = express();
const port = process.env.PORT || 5000;

// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB
connectDB();

app.use(routes)


app.listen(port, () => {
    console.log(`Server running at https://localhost:${port}`);
});
