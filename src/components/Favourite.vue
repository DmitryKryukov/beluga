<template lang="pug">
  #page
    AppHeader(title="Любимое")
    section.row
     .col 
        DishCard(v-for="dish in store.favourite", :key="dish.id", :dish="dish", @nextView="goToDishView")
     .col
        DishCard(v-for="dish in store.favourite", :key="dish.id", :dish="dish", @nextView="goToDishView")
 </template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import DishCard from "@/components/dishes/DishCard";
import store from "@/store/store";

export default {
  components: {
    AppHeader,
    DishCard
  },
  data() {
    return {
      store
    };
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
  margin-top: var(--view-gap);
  margin-bottom: var(--view-gap);
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
</style>
