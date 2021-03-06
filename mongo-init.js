db = db.getSiblingDB('galaxy-pizza');

db.createCollection('pizzas');

db.pizzas.insertMany([
  {
    name: 'Цыпленок Флорентина',
    description: 'Сливочно-шпинатный соус, сыр моцарелла, нежная куриная грудка, хрустящий бекон, сочные томаты',
    imageUrl: {
      fat: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/Chicken-Florentina-traditional%20(1).jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/Chicken-Florentina-traditional%20(1).webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Chicken-Florentina-Traditional.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Chicken-Florentina-Traditional.webp',
        },
      },
      slim: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/Chicken-florenting-Thin.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/Chicken-florenting-Thin.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Chicken-Florentina-Thin.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Chicken-Florentina-Thin.webp',
        },
      },
    },
    types: {
      fat: {
        none: {
          sizes: [23, 30, 35, 40],
          price: [439, 639, 789, 989],
        },
        cheese: {
          sizes: [35, 40],
          price: [988, 1188],
        },
      },
      slim: {
        none: {
          sizes: [30, 35, 40],
          price: [639, 789, 989],
        },
      },
    },
    hot: false,
    vegan: false,
  },
  {
    name: 'Мясное барбекю',
    description: 'Мясная пицца с пикантной пепперони, альпийскими колбасками, Моцареллой, луком и соусом Барбекю',
    imageUrl: {
      fat: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/f945f964cd6a8f173ceaa66cc6cb3dbb.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/f945f964cd6a8f173ceaa66cc6cb3dbb.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/64e568f97a17aa5caf0284511cde70a7.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/64e568f97a17aa5caf0284511cde70a7.webp',
        },
      },
      slim: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/2a435906a415a7af7f9942e583459d75.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/2a435906a415a7af7f9942e583459d75.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/0646a4d6da994a4a7aa53f395c9fb81a.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/0646a4d6da994a4a7aa53f395c9fb81a.webp',
        },
      },
    },
    types: {
      fat: {
        none: {
          sizes: [23, 30, 35, 40],
          price: [499, 799, 949, 1059],
        },
        cheese: {
          sizes: [30, 35, 40],
          price: [998, 1148, 1258],
        },
        sausage: {
          sizes: [30, 35, 40],
          price: [1018, 1168, 1278],
        },
      },
      slim: {
        none: {
          sizes: [30, 35, 40],
          price: [799, 949, 1059],
        },
      },
    },
    hot: false,
    vegan: false,
  },
  {
    name: 'Маленькая италия',
    description:
      'Сыр моцарелла, пикантная пепперони, ароматная свинина, орегано, шампиньоны, черные оливки с фирменным томатным соусом',
    imageUrl: {
      fat: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/Little-Italy-traditional.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/Little-Italy-traditional.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Little-Italy-Traditional.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Little-Italy-Traditional.webp',
        },
      },
      slim: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/Little-Italy-Thin.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/Little-Italy-Thin.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Little-Italy-Thin.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Little-Italy-Thin.webp',
        },
      },
    },
    types: {
      fat: {
        none: {
          sizes: [23, 30, 35, 40],
          price: [499, 639, 789, 989],
        },
        cheese: {
          sizes: [30, 35, 40],
          price: [858, 1008, 1208],
        },
      },
      slim: {
        none: {
          sizes: [30, 35, 40],
          price: [639, 789, 989],
        },
      },
    },
    hot: false,
    vegan: false,
  },
  {
    name: 'Большая бонанза',
    description:
      'Оригинальная пицца с говядиной, ароматной ветчиной, двойной порцией хрустящего бекона, соусом "Барбекю", Моцареллой, мягким молодым сыром, томатами, жгучим перцем "Халапеньо"и луком',
    imageUrl: {
      fat: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/Big-bonanza-traditional.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/Big-bonanza-traditional.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Big-Bonanza-Traditional.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Big-Bonanza-Traditional.webp',
        },
      },
      slim: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/Big-bonanza-Thin.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/Big-bonanza-Thin.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Big-Bonza-Thin.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Big-Bonza-Thin.webp',
        },
      },
    },
    types: {
      fat: {
        none: {
          sizes: [23, 30, 35, 40],
          price: [459, 669, 809, 999],
        },
        cheese: {
          sizes: [30, 35, 40],
          price: [868, 1008, 1198],
        },
        sausage: {
          sizes: [30, 35, 40],
          price: [888, 1028, 1218],
        },
      },
      slim: {
        none: {
          sizes: [30, 35, 40],
          price: [669, 809, 999],
        },
      },
    },
    hot: true,
    vegan: false,
  },
  {
    name: 'Мексиканская',
    description:
      'Острая пицца с куриным филе, фирменным томатным соусом, Моцареллой, шампиньонами, луком, томатами, сладким зелёным перцем и перцем "Халапеньо"',
    imageUrl: {
      fat: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/Mexican-traditional.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/Mexican-traditional.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Mexican-Traditional.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Mexican-Traditional.webp',
        },
      },
      slim: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/Mexican-Thin.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/Mexican-Thin.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Mexican-Thin.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Mexican-Thin.webp',
        },
      },
    },
    types: {
      fat: {
        none: {
          sizes: [23, 30, 35, 40],
          price: [439, 629, 769, 969],
        },
        cheese: {
          sizes: [30, 35, 40],
          price: [828, 968, 1168],
        },
        sausage: {
          sizes: [30, 35, 40],
          price: [848, 988, 1188],
        },
      },
      slim: {
        none: {
          sizes: [30, 35, 40],
          price: [629, 769, 969],
        },
      },
    },
    hot: true,
    vegan: false,
  },
  {
    name: 'Вегетарианская',
    description:
      'Лёгкая пицца с фирменным томатным соусом, Моцареллой, сладким зелёным перцем, шампиньонами, маслинами, луком и сочными томатами',
    imageUrl: {
      fat: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/Vegetarian-traditional.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/Vegetarian-traditional.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Vegie-Traditional.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Vegie-Traditional.webp',
        },
      },
      slim: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/Vegetarian-thin.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/Vegetarian-thin.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Vegie-Thin.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Vegie-Thin.webp',
        },
      },
    },
    types: {
      fat: {
        none: {
          sizes: [23, 30, 35, 40],
          price: [399, 539, 719, 919],
        },
        cheese: {
          sizes: [30, 35, 40],
          price: [738, 918, 1118],
        },
        sausage: {
          sizes: [30, 35, 40],
          price: [758, 938, 1138],
        },
      },
      slim: {
        none: {
          sizes: [30, 35, 40],
          price: [539, 719, 919],
        },
      },
    },
    hot: false,
    vegan: true,
  },
  {
    name: 'Веганская с овощами',
    description:
      'Фирменный томатный соус, веганская Моцарелла, сладкий зелёный перец, шампиньоны, маслины, лук и сочные томаты',
    imageUrl: {
      fat: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/9efdd0646d0a810e36e62854f71fe94b.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/9efdd0646d0a810e36e62854f71fe94b.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/5f898b25ffeb3723fdc47fccc2a777a9.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/5f898b25ffeb3723fdc47fccc2a777a9.webp',
        },
      },
      slim: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/0d8ad9775aac54abc3237e8ba7d0edfa.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/0d8ad9775aac54abc3237e8ba7d0edfa.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/4ce7a6048da8c4e6a981644711679ee9.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/4ce7a6048da8c4e6a981644711679ee9.webp',
        },
      },
    },
    types: {
      fat: {
        none: {
          sizes: [23, 30, 35, 40],
          price: [499, 799, 949, 1059],
        },
      },
      slim: {
        none: {
          sizes: [30, 35, 40],
          price: [799, 949, 1059],
        },
      },
    },
    hot: false,
    vegan: true,
  },
  {
    name: 'Супер Папа',
    description:
      'Хит "Папа Джонс" с пикантной пепперони, ветчиной, ароматной свининой, фирменным томатным соусом, Моцареллой, шампиньонами, луком, маслинами и сладким зелёный перцем',
    imageUrl: {
      fat: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/Super-Papa-traditional.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/Super-Papa-traditional.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Super-Papa-Traditional.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Super-Papa-Traditional.webp',
        },
      },
      slim: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/Super-Papa-Thin.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/Super-Papa-Thin.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Super-Papa-Thin.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Super-Papa-Thin.webp',
        },
      },
    },
    types: {
      fat: {
        none: {
          sizes: [23, 30, 35, 40],
          price: [499, 739, 889, 1019],
        },
        cheese: {
          sizes: [30, 35, 40],
          price: [938, 1088, 1218],
        },
        sausage: {
          sizes: [30, 35, 40],
          price: [958, 1108, 1238],
        },
      },
      slim: {
        none: {
          sizes: [30, 35, 40],
          price: [739, 889, 1019],
        },
      },
    },
    hot: false,
    vegan: false,
  },
  {
    name: 'Папа Микс',
    description: 'Четыре любимых пиццы в одной: Пепперони, Цыпленок Барбекю, Четыре Сыра, Маргарита',
    imageUrl: {
      fat: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/9b970f85e111199882b3d116cfce614e.png',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/9b970f85e111199882b3d116cfce614e.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/f60b009ab6e81a2ca89ac80a3072d32c.png',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/f60b009ab6e81a2ca89ac80a3072d32c.webp',
        },
      },
      slim: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/f2299b7976481ecec57f3ec7458a95bd.png',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/f2299b7976481ecec57f3ec7458a95bd.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/41723a95f9e4aeb81a3f2480e4ba5c33.png',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/41723a95f9e4aeb81a3f2480e4ba5c33.webp',
        },
      },
    },
    types: {
      fat: {
        none: {
          sizes: [35],
          price: [809],
        },
      },
      slim: {
        none: {
          sizes: [35],
          price: [809],
        },
      },
    },
    hot: false,
    vegan: false,
  },
  {
    name: 'Альфредо',
    description:
      'Пицца со сливочно-шпинатным соусом, Моцареллой, ветчиной, хрустящим беконом, шампиньонами и сочными томатами',
    imageUrl: {
      fat: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/Alfredo-traditional.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/Alfredo-traditional.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Alfredo-Traditional.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Alfredo-Traditional.webp',
        },
      },
      slim: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/Alfredo-Thin.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/Alfredo-Thin.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Alfredo-Thin.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Alfredo-Thin.webp',
        },
      },
    },
    types: {
      fat: {
        none: {
          sizes: [23, 30, 35, 40],
          price: [499, 759, 899, 1019],
        },
        cheese: {
          sizes: [30, 35, 40],
          price: [958, 1098, 1218],
        },
        sausage: {
          sizes: [30, 35, 40],
          price: [978, 1118, 1238],
        },
      },
      slim: {
        none: {
          sizes: [30, 35, 40],
          price: [759, 899, 1019],
        },
      },
    },
    hot: false,
    vegan: false,
  },
  {
    name: 'Пепперони с хрустящей чесночно-сырной корочкой',
    description: 'Любимая классика с дополнением! Пепперони с ароматной корочкой с чесноком и смесью сыров',
    imageUrl: {
      fat: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/40177e3248f2fbb8f2ba75d37b4478f1.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/40177e3248f2fbb8f2ba75d37b4478f1.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/0ff1d9c9023874875f92162a279d9ce7.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/0ff1d9c9023874875f92162a279d9ce7.webp',
        },
      },
    },
    types: {
      fat: {
        none: {
          sizes: [23, 30, 35, 40],
          price: [439, 639, 789, 989],
        },
      },
    },
    hot: false,
    vegan: false,
  },
]);
