import express from 'express';
import pizzaRoutes from './routes/pizza-routes';
import swaggerRoutes from './swagger';
import cors from 'cors';
import 'dotenv/config';
import './core/db';

const app = express();

app.use(cors());
app.use(express.json());

app.use(pizzaRoutes);

app.use(swaggerRoutes);

app
  .listen(process.env.PORT, (): void => {
    console.log('Server running!');
  })
  .on('error', (error) => console.log(error));
