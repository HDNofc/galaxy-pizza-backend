import express from 'express';
import PizzaModel from '../models/pizza-model';

class PizzaController {
  async getPizzas(_req: express.Request, res: express.Response): Promise<void> {
    try {
      const pizzas = await PizzaModel.find({}).exec();

      res.status(200).json({
        status: 'success',
        data: pizzas,
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error,
      });
    }
  }
}

export const PizzaCtrl = new PizzaController();
