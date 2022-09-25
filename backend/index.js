//if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
//}
console.log(process.env.MONGODB_URI);
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
//*const path = require('path');

// Initializations
const app = express();
require('./database');

// settings configuracion del puerto
app.set('port', process.env.PORT || 8080);

// middlewares
app.use(morgan('dev'));
app.use(cors());

app.use(express.urlencoded({extended: false})); // ayuda a que los datos formularios se traten como json
app.use(express.json()); // sirve para entender las petisiones ajaw osea .json

// routes
app.use('/api/books', require('./routes/books'));

// start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});