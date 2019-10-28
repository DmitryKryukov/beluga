<template lang="pug">
  #page
    AppHeader(title="Корзина")
      .app-header__quantity {{store.cart.length}}
    main
      section
        .row
          .col
            CartCard(v-for="cartItem in store.cart", :key="1", :dish="cartItem.dish" :quantity="1")
            hr(v-if="store.cart.length != 0")
            Input(placeholder="Промокод", value='HuiPizda')
              img(src="./assets/cart/promo.svg", alt="Промокод")
            RecomendationCard(:dish="cart.dishes[0]")
            footer.cart-footer
              router-link(:to = "{path: '/cart/checkout'}" )   
                Button(text="Оформить за 900 ₽")
 </template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import CartCard from "@/components/cart/CartCard";
import RecomendationCard from "@/components/cart/RecomendationCard";
import Input from "@/components/form/Input";
import Button from "@/components/form/Button";
import store from "@/store/store";

export default {
  components: {
    AppHeader,
    CartCard,
    RecomendationCard,
    Input,
    Button
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
.recomendation {
  margin-top: 20px;
  margin-bottom: 89px;
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
  }
}
</style>
