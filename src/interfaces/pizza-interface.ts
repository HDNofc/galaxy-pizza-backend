type IPizzaDoughTypes = 'fat' | 'slim';

type IPizzaCrustTypes = 'none' | 'cheese' | 'sausage';

type IImageShape = {
  [key in IPizzaDoughTypes]?: {
    crop: {
      jpg: string;
      webp: string;
    };
    full: {
      jpg: string;
      webp: string;
    };
  };
};

export type IPizzaCrust = {
  [key in IPizzaCrustTypes]?: {
    sizes: number[];
    price: number[];
  };
};

export type IPizzaTypes = {
  [key in IPizzaDoughTypes]?: IPizzaCrust;
};

export interface PizzaModelInterface {
  _id?: string;
  name: string;
  description: string;
  imageUrl: IImageShape;
  types: IPizzaTypes;
  hot: boolean;
  vegan: boolean;
}
