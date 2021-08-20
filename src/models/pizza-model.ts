import { model, Schema, Model } from 'mongoose';

import { PizzaModelInterface } from '../interfaces/pizza-interface';

const PizzaStuffedCrust = {
  sizes: {
    type: [Number],
    default: undefined,
  },
  price: {
    type: [Number],
    default: undefined,
  },
};

const PizzaImageShape = {
  jpg: String,
  webp: String,
};

const PizzaSchema = new Schema<PizzaModelInterface, Model<PizzaModelInterface>, PizzaModelInterface>(
  {
    name: String,
    description: String,
    imageUrl: {
      fat: {
        crop: PizzaImageShape,
        full: PizzaImageShape,
      },
      slim: {
        crop: PizzaImageShape,
        full: PizzaImageShape,
      },
    },
    types: {
      fat: {
        none: PizzaStuffedCrust,
        cheese: PizzaStuffedCrust,
        sausage: PizzaStuffedCrust,
      },
      slim: {
        none: PizzaStuffedCrust,
      },
    },
    hot: Boolean,
    vegan: Boolean,
  },
  {
    timestamps: true,
    minimize: true,
  }
);

const PizzaModel = model<PizzaModelInterface>('Pizza', PizzaSchema);

export default PizzaModel;
