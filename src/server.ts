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
    console.info(`=================================`);
    console.info(`======= ENV: ${process.env.NODE_ENV} =======`);
    console.info(`🚀 App listening on the port ${process.env.PORT}`);
    console.info(`=================================`);
  })
  .on('error', (error) => console.log(error));
