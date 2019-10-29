<template lang="pug">
  #page
    app-header(title="Белуга")

    .scroller.scroller--discount.scroller--borderless
      discount-card(v-for="discount in store.discounts", :key="discount.id", :name="discount.name", :description = "discount.description", :code = "discount.code")
    
    pager(:tabs = "tabs")
      section(v-for="category in store.categories", :key="category.id")
        .row
          .col 
            dish-card(v-for="dish in category.dishes", :key="dish.id", :dish="dish", @nextView="preserveScrollPosition")
          .col
            dish-card(v-for="dish in category.dishes", :key="dish.id", :dish="dish", @nextView="preserveScrollPosition")
 </template>

<script>
import appHeader from "@/components/layout/AppHeader";
import discountCard from "@/components/discounts/DiscountCard";
import pager from "@/components/layout/Pager";
import dishCard from "@/components/dishes/DishCard";
import store from "@/store/store";

export default {
  components: {
    appHeader,
    discountCard,
    pager,
    dishCard
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
    preserveScrollPosition() {
      this.$emit("nextView", window.pageYOffset);
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .dish-card {
  margin-top: var(--view-margin);
  margin-bottom: var(--view-margin);
}
.col:first-of-type {
  & > .dish-card:nth-child(even) {
    display: none;
  }
}
.col:last-of-type {
  & > .dish-card:nth-child(odd) {
    display: none;
  }
}
.scroller--discount {
  padding-bottom: 21px;
}
</style>
