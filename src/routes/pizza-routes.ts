import express from 'express';
import { PizzaCtrl } from '../controllers/pizza-controller';

const router = express.Router();

router.get('/pizzas', PizzaCtrl.getPizzas);
router.get('/pizzas/taste/:taste', PizzaCtrl.getPizzasByTaste);

export default router;
