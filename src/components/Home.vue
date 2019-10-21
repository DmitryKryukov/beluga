<template lang="pug">
  #page
    AppHeader(title="Белуга")
      a(href="#").text--muted.text--uppercase Все акции →
    aside.scroller.scroller--discount.scroller--borderless
      DiscountCard
      DiscountCard
      DiscountCard
      DiscountCard
    Pager(:tabs = "tabs")
      section(v-for="category in categories", :key="category.id")
        .row
          .col 
            DishCard(v-for="dish in category.dishes", :key="dish.id", :dish="dish")
          .col
            DishCard(v-for="dish in category.dishes", :key="dish.id", :dish="dish")
 </template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import Pager from "@/components/layout/Pager";
import DishCard from "@/components/dishes/DishCard";
import DiscountCard from "@/components/discounts/DiscountCard";

let nextDishId = 0;
let nextCategoryId = 0;
export default {
  components: {
    AppHeader,
    DishCard,
    DiscountCard,
    Pager
  },
  data() {
    return {
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
              price: "+\xa01279\xa0₽"
            },
            {
              id: nextDishId++,
              name: "Бефстроганов с\xa0пюре",
              aside: "320\xa0г",
              price: "+\xa0413\xa0₽"
            },
            {
              id: nextDishId++,
              name: "Свиная рулька с\xa0тушёной капустой",
              aside: "320\xa0г",
              price: "+\xa0582\xa0₽"
            },
            {
              id: nextDishId++,
              name: "Говяжьи щёчки с\xa0пюре из\xa0корня сельдерея",
              aside: "320\xa0г",
              price: "+\xa0980\xa0₽"
            },
            {
              id: nextDishId++,
              name: "Бифштекс из\xa0баранины",
              aside: "320\xa0г",
              price: "+\xa0465\xa0₽"
            },
            {
              id: nextDishId++,
              name: "Ребра говяжьи",
              aside: "320\xa0г",
              price: "+\xa01279\xa0₽"
            },
            {
              id: nextDishId++,
              name: "Пельмен с\xa0говядиной",
              aside: "320\xa0г",
              price: "+\xa0317\xa0₽"
            },
            {
              id: nextDishId++,
              name: "Баранья нога",
              aside: "320\xa0г",
              price: "+\xa03695\xa0₽"
            },
            {
              id: nextDishId++,
              name: "Рубленый стейк из\xa0мраморной говядины",
              aside: "320\xa0г",
              price: "+\xa0769\xa0₽"
            },
            {
              id: nextDishId++,
              name: "Говяжий язык с птитимом",
              aside: "320\xa0г",
              price: "+\xa0465\xa0₽"
            },
            {
              id: nextDishId++,
              name: "Голень индейки с гречотто",
              aside: "320\xa0г",
              price: "+\xa0518\xa0₽"
            },
            {
              id: nextDishId++,
              name: "Свиная корейка",
              aside: "320\xa0г",
              price: "+\xa0553\xa0₽"
            },
            {
              id: nextDishId++,
              name: "Жареный цыплёнок",
              aside: "320\xa0г",
              price: "+\xa0365\xa0₽"
            },
            {
              id: nextDishId++,
              name: "Жаркое из\xa0говядины",
              aside: "320\xa0г",
              price: "+\xa0370\xa0₽"
            },
            {
              id: nextDishId++,
              name: "Рагу из\xa0баранины",
              aside: "320\xa0г",
              price: "+\xa0370\xa0₽"
            }
          ]
        },
        {
          id: nextCategoryId++,
          name: "Морепродукты",
          dishes: [
            {
              id: nextDishId++,
              name: "Котлета из щуки с пюре",
              aside: "320\xa0г",
              price: "+\xa0295\xa0₽"
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
              price: "+\xa0265\xa0₽"
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
              price: "+\xa0286\xa0₽"
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
              price: "+\xa0190\xa0₽"
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
              price: "+\xa079\xa0₽"
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
              price: "+\xa0128\xa0₽"
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
              price: "+\xa0275\xa0₽"
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
              price: "+\xa0116\xa0₽"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    nextDishId = 0;
    nextCategoryId = 0;
  },
  computed: {
    tabs: function() {
      return this.categories.filter(function(category) {
        let tabs = Object.assign({}, category);
        delete tabs.dishes;
        return tabs;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
//Два селектора ниже скрывает каждый второй элемент в колонке
.col:first-of-type {
  & > *:nth-child(even) {
    //todo Перенести в компьютед
    display: none;
  }
}
.col:last-of-type {
  & > *:nth-child(odd) {
    //todo Перенести в компьютед
    display: none;
  }
}
.scroller--discount {
  padding-bottom: 21px;
}
/deep/ .dish-card {
  //Добавляем поле между карточками блюд
  margin-bottom: var(--view-gap);
}
</style>
