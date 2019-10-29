<template lang="pug">
  #page
    app-header(title="Любимое")
    section.row(v-if="store.favourite.length == 0")
      .favourite__empty
        .favourite__empty__image 
        .favourite__empty__heading Список любимых блюд пуст
        .favourite__empty__text Нажмите на значок в карточке блюда, чтобы добавить первое
    
    section.row(v-if="store.favourite.length !== 0")
     .col 
        dish-card(v-for="dish in store.favourite", :key="dish.id", :dish="dish", @nextView="goToDishView")
     .col
        dish-card(v-for="dish in store.favourite", :key="dish.id", :dish="dish", @nextView="goToDishView")
 </template>

<script>
import appHeader from "@/components/layout/AppHeader";
import dishCard from "@/components/dishes/DishCard";
import store from "@/store/store";

export default {
  components: {
    appHeader,
    dishCard
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
