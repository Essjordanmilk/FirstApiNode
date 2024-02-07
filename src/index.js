const express = require('express');
const app = express();

const morgan = require('morgan'); // Procesa datos antes de que el servidor los reciba (middleware)

/* El orden es importante en esta configuracion */

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rutas
app.use(require('../src/routes/index'));
app.use('/api/movies', require('../src/routes/movies'));
app.use('/api/users', require('../src/routes/users'));

// Configuraciones
app.set('port', process.env.PORT || 3000); // Configurar un puerto del servidor o tomar uno por defecto
app.set('json spaces', 2); // Dar formato a los JSON

// Iniciar el servidor
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
