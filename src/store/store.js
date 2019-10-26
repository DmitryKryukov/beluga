let nextCategoryId = 0;
let nextDishId = 0;
export default {
  categories: [
    {
      id: nextCategoryId++,
      name: "Мясо",
      active: true,
      dishes: [
        {
          id: nextDishId++,
          name: "Лопатка ягнёнка",
          aside: "320\xa0г",
          price: "1279\xa0₽",
          favourite: false
        },
        {
          id: nextDishId++,
          name: "Бефстроганов с\xa0пюре",
          aside: "320\xa0г",
          price: "413\xa0₽",
          favourite: false
        },
        {
          id: nextDishId++,
          name: "Свиная рулька с\xa0тушёной капустой",
          aside: "320\xa0г",
          price: "582\xa0₽",
          favourite: false
        },
        {
          id: nextDishId++,
          name: "Говяжьи щёчки с\xa0пюре из\xa0корня сельдерея",
          aside: "320\xa0г",
          price: "980\xa0₽",
          favourite: false
        },
        {
          id: nextDishId++,
          name: "Бифштекс из\xa0баранины",
          aside: "320\xa0г",
          price: "465\xa0₽",
          favourite: false
        },
        {
          id: nextDishId++,
          name: "Ребра говяжьи",
          aside: "320\xa0г",
          price: "1279\xa0₽",
          favourite: false
        },
        {
          id: nextDishId++,
          name: "Пельмени с\xa0говядиной",
          aside: "320\xa0г",
          price: "317\xa0₽",
          favourite: false
        },
        {
          id: nextDishId++,
          name: "Баранья нога",
          aside: "320\xa0г",
          price: "3695\xa0₽",
          favourite: false
        },
        {
          id: nextDishId++,
          name: "Рубленый стейк из\xa0мраморной говядины",
          aside: "320\xa0г",
          price: "769\xa0₽",
          favourite: false
        },
        {
          id: nextDishId++,
          name: "Говяжий язык с\xa0птитимом",
          aside: "320\xa0г",
          price: "465\xa0₽",
          favourite: false
        },
        {
          id: nextDishId++,
          name: "Голень индейки с\xa0гречотто",
          aside: "320\xa0г",
          price: "518\xa0₽",
          favourite: false
        },
        {
          id: nextDishId++,
          name: "Свиная корейка",
          aside: "320\xa0г",
          price: "553\xa0₽",
          favourite: false
        },
        {
          id: nextDishId++,
          name: "Жареный цыплёнок",
          aside: "320\xa0г",
          price: "365\xa0₽",
          favourite: false
        },
        {
          id: nextDishId++,
          name: "Жаркое из\xa0говядины",
          aside: "320\xa0г",
          price: "370\xa0₽",
          favourite: false
        },
        {
          id: nextDishId++,
          name: "Рагу из\xa0баранины",
          aside: "320\xa0г",
          price: "370\xa0₽",
          favourite: false
        }
      ]
    },
    {
      id: nextCategoryId++,
      name: "Морепродукты",
      dishes: [
        {
          id: nextDishId++,
          name: "Котлета из щуки с\xa0пюре",
          aside: "320\xa0г",
          price: "295\xa0₽",
          favourite: false
        }
      ]
    },
    {
      id: nextCategoryId++,
      name: "Салаты",
      dishes: [
        {
          id: nextDishId++,
          name: "Овощной салат",
          aside: "320\xa0г",
          price: "265\xa0₽",
          favourite: false
        }
      ]
    },
    {
      id: nextCategoryId++,
      name: "Супы",
      dishes: [
        {
          id: nextDishId++,
          name: "Бостонский чаудер",
          aside: "320\xa0г",
          price: "286\xa0₽",
          favourite: false
        }
      ]
    },
    {
      id: nextCategoryId++,
      name: "Гарниры",
      dishes: [
        {
          id: nextDishId++,
          name: "Брокколи в сливочном соусе",
          aside: "320\xa0г",
          price: "190\xa0₽",
          favourite: false
        }
      ]
    },
    {
      id: nextCategoryId++,
      name: "Соусы",
      dishes: [
        {
          id: nextDishId++,
          name: "Аджика",
          aside: "50\xa0мл",
          price: "79\xa0₽",
          favourite: false
        }
      ]
    },
    {
      id: nextCategoryId++,
      name: "Выпечка",
      dishes: [
        {
          id: nextDishId++,
          name: "Хлебная корзина",
          aside: "50\xa0мл",
          price: "128\xa0₽",
          favourite: false
        }
      ]
    },
    {
      id: nextCategoryId++,
      name: "Десерты",
      dishes: [
        {
          id: nextDishId++,
          name: "Чизкейк манго и маракуйя",
          aside: "50\xa0мл",
          price: "275\xa0₽",
          favourite: false
        }
      ]
    },
    {
      id: nextCategoryId++,
      name: "Напитки",
      dishes: [
        {
          id: nextDishId++,
          name: "Американо",
          aside: "200\xa0мл",
          price: "116\xa0₽",
          favourite: false
        }
      ]
    }
  ],
  cart: [],
  favourite: []
};
