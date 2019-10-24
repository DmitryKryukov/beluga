<template lang="pug">
  mixin contact-group(caption = "", main = "", aside = "")
    .contact-group   
      .contact-group__info
        if aside
          .contact-group__info--aside  !{aside}
          .contact-group__info--main !{main}
        else
          .contact-group__info !{main}
      .contact-group__caption !{caption}


  #page
    AppHeader(title="О нас")
    Pager(:tabs = "[{id: 0, name: 'Контакты'},{id: 1, name: 'Акции и промокоды'},{id: 2, name: 'Залы'}]")
      section
        .row
          .col
            +contact-group("Закажите доставку","&nbsp;99&nbsp;99&nbsp;27","+7&nbsp;8512")
            +contact-group("Забронируйте столик","&nbsp;99&nbsp;99&nbsp;28","+7&nbsp;8512")
            +contact-group("Находимся в центре города","Фиолетова, 3")
            .map
            Button(text="Инстаграмм")    
      section
        .row
          .col
            DiscountCard
            DiscountCard
            DiscountCard
            DiscountCard
            DiscountCard
      section
        .row
          .col
            .test
 </template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import Button from "@/components/form/Button";
import Pager from "@/components/layout/Pager";
import DiscountCard from "@/components/discounts/DiscountCard";
export default {
  components: {
    AppHeader,
    Button,
    Pager,
    DiscountCard
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.contact-group {
  display: block;
  margin-bottom: var(--view-margin);
  &__info {
    display: flex;
    align-items: baseline;
    margin-bottom: 6px;
    font-size: 17px;

    &--aside {
      font-size: 13px;
    }
  }
  &__caption {
    font-size: 13px;
    color: var(--color-muted);
  }
}
.map {
  width: 100%;
  margin-top: calc(var(--view-margin) * 2);
  margin-bottom: calc(var(--view-margin) * 3);
  border-radius: var(--border-radius);
  height: 262px;
  background-color: var(--plain);
}
.discount-card:not(:last-child) {
  margin-bottom: var(--view-gap);
}
.test {
  height: 2000px;
  background-color: red;
}
</style>
