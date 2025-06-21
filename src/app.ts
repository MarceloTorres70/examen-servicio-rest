import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import casaRouter from './routes/casa.routes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Archivos estáticos
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../public')));

// Rutas
app.use('/casa', casaRouter);

export default app;