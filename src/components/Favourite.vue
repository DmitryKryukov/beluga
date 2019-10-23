<template lang="pug">
  #page
    AppHeader(title="Любимое")
    section.row
     .col 
        DishCard(:dish="dishMock")
        DishCard(:dish="dishMock")
     .col
        DishCard(:dish="dishMock")
 </template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import DishCard from "@/components/dishes/DishCard";

export default {
  components: {
    AppHeader,
    DishCard
  },
  data() {
    return {
      dishMock: {
        id: 0,
        name: "Котлета из щуки с пюре",
        aside: "320\xa0г",
        price: "+\xa0295\xa0₽",
        favourite: true
      }
    };
  }
};
</script>

<style lang="scss" scoped>
section {
  padding-top: 20px;
}
/deep/ .dish-card {
  //Добавляем поле между карточками блюд
  margin-bottom: var(--view-gap);
}
</style>
