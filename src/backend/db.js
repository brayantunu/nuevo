// import mysql from 'mysql'
// import { Sequelize } from 'sequelize';
import { createPool } from 'mysql2/promise';
import {
  DB_USER,
  DB_PORT,
  DB_PASSWORD,
  DB_DATABASE
} from './config.js'
// import { DB_DATABASE,DB_PASSWORD,DB_PORT,DB_USER } from './config.js';

// export const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'tusena'
// });


export const connection = createPool({
user: DB_USER,
password:DB_PASSWORD,
port:DB_PORT,
database:DB_DATABASE
});

// connection.connect((error) => {
//   if (error) {
//     console.error('Error de conexión: ' + error.stack);
//     return;
//   }
//   console.log('Conexión establecida con éxito');
// });


