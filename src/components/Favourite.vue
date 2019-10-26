<template lang="pug">
  #page
    AppHeader(title="Любимое")
    section.row(v-if="store.favourite.length !== 0")
     .col 
        DishCard(v-for="dish in store.favourite", :key="dish.id", :dish="dish", @nextView="goToDishView")
     .col
        DishCard(v-for="dish in store.favourite", :key="dish.id", :dish="dish", @nextView="goToDishView")
    section.row(v-if="store.favourite.length == 0")
      .favourite__empty
        .favourite__empty__image 
        .favourite__empty__heading Список любимых блюд пуст
        .favourite__empty__text Нажмите на значок в карточке блюда, чтобы добавить первое
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
@import "../styles/mixins";
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
.favourite__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 85px - 126px);
  &__image {
    background-color: var(--plain);
    width: 280px;
    height: 280px;
    border-radius: 50%;
    margin-bottom: 45px;
  }
  &__heading {
    text-align: center;
    margin-bottom: var(--view-margin);
    @include heading;
    width: 85%;
  }
  &__text {
    text-align: center;
    @include body;
    color: var(--color-muted);
    width: 85%;
  }
}
</style>
