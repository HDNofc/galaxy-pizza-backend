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

  async getPizzasByTaste(req: express.Request, res: express.Response): Promise<void> {
    try {
      const pizzaCrust = req.params; // TODO Добавить в swagger

      let filterQuery = {};
      switch (pizzaCrust.taste) {
        case 'vegan':
        case 'hot':
          filterQuery = { [pizzaCrust.taste]: true };
          break;
        case 'cheese':
        case 'sausage':
          filterQuery = { [`types.fat.${pizzaCrust.taste}`]: { $exists: true } };
          break;
        default:
          break;
      }

      const pizzas = await PizzaModel.find(filterQuery).exec();

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
