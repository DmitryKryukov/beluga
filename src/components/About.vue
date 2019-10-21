<template lang="pug">
  #page
    AppHeader(title="О нас")
    Pager(:tabs = "[{id: 0, name: 'Контакты'},{id: 1, name: 'Акции и промокоды'},{id: 2, name: 'Залы'}]")
      section
        .row
          .col
            .contact-group
              .contact-group-info.phone 
                aside +7&nbsp;8512
                main &nbsp;99&nbsp;99&nbsp;27
              .contact-group-caption Закажите доставку
            .contact-group
              .contact-group-info.phone 
                aside +7&nbsp;8512
                main &nbsp;99&nbsp;99&nbsp;28&nbsp;
              .contact-group-caption Забронируйте столик
            .contact-group
              .contact-group-info Фиолетова,3
              .contact-group-caption Находимся в самом центре города
            .map
            //Button(text="Инстаграмм")    
      section
        .row
          .col
            DiscountCard
            DiscountCard
            DiscountCard
            DiscountCard
            DiscountCard
      section Залы        
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
  &-info {
    display: flex;
    align-items: baseline;
    margin-bottom: 6px;
    font-size: 17px;

    &.phone {
      aside {
        font-size: 13px;
      }
    }
  }
  &-caption {
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
  background-color: var(--primary);
}
.discount-card {
  margin-bottom: var(--view-gap);
  &:last-child {
    margin-bottom: 107px;
  }
}
</style>
