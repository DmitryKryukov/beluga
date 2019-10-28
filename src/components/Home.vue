<template lang="pug">
  #page
    AppHeader(title="Белуга")
        a(href="#/about#discount").app-header__link Все акции →
    aside.scroller.scroller--discount.scroller--borderless
      DiscountCard(name="Бизнес-ланч за\xa0350\u2009₽", description = "с\xa013:00 до\xa016:30", code="lunchbox")
      DiscountCard
      DiscountCard
      DiscountCard
    Pager(:tabs = "tabs")
      section(v-for="category in store.categories", :key="category.id")
        .row
          .col 
            DishCard(v-for="dish in category.dishes", :key="dish.id", :dish="dish", @nextView="goToDishView")
          .col
            DishCard(v-for="dish in category.dishes", :key="dish.id", :dish="dish", @nextView="goToDishView")
 </template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import Pager from "@/components/layout/Pager";
import DishCard from "@/components/dishes/DishCard";
import DiscountCard from "@/components/discounts/DiscountCard";
import store from "@/store/store";
export default {
  components: {
    AppHeader,
    DishCard,
    DiscountCard,
    Pager
  },
  data() {
    return {
      store
    };
  },
  mounted() {},
  computed: {
    tabs: function() {
      return this.store.categories.filter(function(category) {
        let tabs = Object.assign({}, category);
        delete tabs.dishes;
        return tabs;
      });
    }
  },
  methods: {
    goToDishView() {
      this.$emit("nextView", window.pageYOffset);
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .dish-card {
  //Добавляем поле между карточками блюд
  margin-top: var(--view-margin);
  margin-bottom: var(--view-margin);
}
.col:first-of-type {
  & > *:nth-child(even) {
    display: none;
  }
}

.col:last-of-type {
  & > *:nth-child(odd) {
    display: none;
  }
}

.scroller--discount {
  padding-bottom: 21px;
}
</style>
