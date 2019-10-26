<template lang="pug">
  mixin contact-group(caption = "", main = "", aside = "")
    .contact-group   
      .contact-group__info
        if aside
          .contact-group__info--aside  !{aside}
          .contact-group__info--main !{main}
        else
          .contact-group__info--main !{main}
      .contact-group__caption !{caption}
  
  mixin area(caption = "Название зала", seat="15")
    .area
      .area__name !{caption}
      .area__seat !{seat} посадочных мест
  
  #page
    AppHeader(title="О нас")
    Pager(:tabs = "[{id: 0, name: 'Контакты'},{id: 1, name: 'Залы'},{id: 2, name: 'Акции и промокоды'}]")
      section
        .row
          .col
            +contact-group("Закажите доставку","&nbsp;99&nbsp;99&nbsp;27","+7&nbsp;8512")
            +contact-group("Забронируйте столик","&nbsp;99&nbsp;99&nbsp;28","+7&nbsp;8512")
            +contact-group("Находимся в центре города","Фиолетова, 3")
            .map            
            //Button(text="Показать на карте")
              img(slot = "prefix" src="./assets/about/icon__2Gis.svg" alt="").btn__prefix
            Button(text="Инстаграм")
              img(slot = "prefix" src="./assets/about/icon__instagram.svg" alt="").btn__prefix
      section
        .row
          .col
            +area("Общий зал", 200)
            +area("Охотничийц зал", 15)
            +area("Зал Прикаспийских государств", 30)
            +area("Зеркальная комната", 20)
            +area("Изумрудный зал", 45)
      section
        .row
          .col
            DiscountCard(name="Бизнес-ланч за\xa0350\u2009₽ с\xa013:00 до\xa016:30", code="lunchbox")
            DiscountCard
            DiscountCard
            DiscountCard
            DiscountCard
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
@import "../styles/mixins";
.contact-group {
  display: block;
  margin-bottom: var(--view-margin);
  &__info {
    display: flex;
    align-items: baseline;
    margin-bottom: 6px;
    font-size: 17px;
    &:first-child {
      margin-top: 20px;
    }
    @include heading;

    &--aside {
      @include body;
      @include uppercase;
    }
  }
  &__caption {
    color: var(--color-muted);
  }
}
.map {
  width: 100%;
  margin-top: 25px;
  margin-bottom: 20px;
  border-radius: var(--border-radius);
  height: 228px;
  background: var(--grad-placeholder);
}
.discount-card {
  margin-top: var(--view-margin);
  margin-bottom: var(--view-margin);
}
.caption {
  @include heading;
}
/deep/ .btn-group {
  margin-bottom: 20px;
}
.area {
  background: var(--grad-placeholder);
  min-height: 128px;
  box-sizing: border-box;
  border-radius: var(--border-radius);
  padding: 10px var(--view-margin) var(--view-margin);
  margin-top: var(--view-margin);
  margin-bottom: var(--view-margin);
  display: flex;
  flex-direction: column;
  &__name {
    line-height: 24px;
  }
  &__seat {
    margin-top: auto;
    color: var(--color-muted);
  }
}
</style>
