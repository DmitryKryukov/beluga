<template lang="pug">
  #page
    AppHeader(title="Заказать 3 блюда")
    main
      section
        .row
          .col
            Segmented(:segmentNames = ['Доставка', 'Самовызов'])
              .segment__content
                .adress-group.adress-group--active Дом
                .adress-group Офис
                .form-group.form-group--add
                  Input(placeholder="Добавить адрес", name="newGroup", @inputData="addGroup")
            //Button(text="Добавить адрес")
            .caption Доставить
            Segmented(:segmentNames = ['Сейчас', 'Ко времени'])
            .caption Оплата
            Segmented(:segmentNames = ['Картой', 'Наличными'])
            .form
              Input(placeholder="Имя", value='Константин')
              Input(placeholder="Телефон", value='8888')
              Input(placeholder="Коментарии к заказу", value='').input-group--last
            footer.cart-footer
              router-link(:to = "{path: '/'}" )   
                Button(text="Оплатить 3200 ₽")
 </template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import Segmented from "@/components/form/Segmented";
import Input from "@/components/form/Input";
import Button from "@/components/form/Button";
import store from "@/store/store";

export default {
  components: {
    AppHeader,
    Input,
    Button,
    Segmented
  },
  mounted() {},
  data() {
    return {
      cart: {
        dishes: [
          {
            id: 0,
            name: "Котлета из\xa0щуки с\xa0пюре",
            aside: "320\xa0г",
            price: "+\xa0295\xa0₽",
            priceNum: 295
          }
        ]
      },
      store
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";
.caption {
  @include caption;
  margin-top: 20px;
}
.app-header__quantity {
  color: var(--color-muted);
  &::before {
    content: "";
    display: inline-block;
    width: 18px;
    height: 13px;
    margin-right: 9px;
    background: url("./assets/cart/quantity.svg");
    background-size: contain;
  }
}
/deep/ .wrapper {
  margin-top: var(--view-margin);
  margin-bottom: var(--view-margin);
}
.input-group--last {
  margin-bottom: 79px;
}
.cart-footer {
  pointer-events: none;
  position: fixed;
  width: 100%;
  left: 0;
  box-sizing: border-box;
  z-index: 2;
  padding: 0 var(--view-margin) var(--view-margin);
  bottom: 82px;
  .btn-group {
    pointer-events: all;
    box-shadow: 0 20px 0 20px var(--bg);
  }
}
section {
  margin-top: var(--view-margin);
}
.adress-group {
  @include caption;
  letter-spacing: 0.05em;
  border: 1px solid var(--color-muted);
  padding: 10px 10px;
  border-radius: var(--border-radius);
  display: inline-block;
  box-sizing: border-box;
  min-width: 100%;
  transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-top: var(--view-margin);
  margin-bottom: var(--view-margin);
  &::before {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-radius: 50%;
  }
  &--active {
    background-color: var(--color-muted);
    color: var(--bg);
    &::before {
      content: "";
      display: inline-block;
      width: 15px;
      height: 15px;
      background-color: var(--color);
      margin-left: 0;
      margin-right: var(--view-gap);
    }
  }
}
</style>
