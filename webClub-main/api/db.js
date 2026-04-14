import 'dotenv/config';
import { Sequelize } from "sequelize";

// Usar variable de entorno para la URL de la base de datos
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('Falta DATABASE_URL en el archivo .env');
}

const sequelize = new Sequelize(databaseUrl, { 
  dialect: 'postgres', 
  ssl: {
    require: true,
    rejectUnauthorized: false,
  }, 
  logging: process.env.NODE_ENV === 'development' ? console.log : false
});

export default sequelize;
