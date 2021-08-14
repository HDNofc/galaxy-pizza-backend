import { model, Schema, Model } from 'mongoose';

import { PizzaModelInterface } from '../interfaces/pizza-interface';

const PizzaSchema = new Schema<PizzaModelInterface, Model<PizzaModelInterface>, PizzaModelInterface>(
  {
    name: String,
    description: String,
    imageUrl: {
      fat: {
        crop: {
          jpg: {
            type: String,
          },
          webp: {
            type: String,
          },
        },
        full: {
          jpg: {
            type: String,
          },
          webp: {
            type: String,
          },
        },
      },
      slim: {
        crop: {
          jpg: {
            type: String,
          },
          webp: {
            type: String,
          },
        },
        full: {
          jpg: {
            type: String,
          },
          webp: {
            type: String,
          },
        },
      },
    },
    types: {
      fat: {
        none: {
          sizes: {
            type: [Number],
          },
          price: {
            type: [Number],
          },
        },
        cheese: {
          sizes: {
            type: [Number],
          },
          price: {
            type: [Number],
          },
        },
        sausage: {
          sizes: {
            type: [Number],
          },
          price: {
            type: [Number],
          },
        },
      },
      slim: {
        none: {
          sizes: {
            type: [Number],
          },
          price: {
            type: [Number],
          },
        },
      },
    },
    hot: {
      type: Boolean,
    },
    vegan: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    minimize: true,
  }
);

const PizzaModel = model<PizzaModelInterface>('Pizza', PizzaSchema);

export default PizzaModel;
