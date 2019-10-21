<template lang="pug">
  #page
    //AppHeader(name="Карточка")
    section.dish
    .dish-header
      .dish-photo
    .dish-name Хе из щуки
    .dish-info
      .dish-info-category Супы
      .dish-info-aside 250 г
    .dish-ingredient Филе щуки, морковь, хуйня
    Button(placeholder="3200 ₽")
    
 </template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import Button from "@/components/form/Button";

export default {
  components: {
    AppHeader,
    Button
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.dish-photo {
  height: 50vw;
  background-color: var(--primary);
}
</style>
