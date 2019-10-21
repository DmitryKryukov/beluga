<template lang="pug">
  #page
    AppHeader(title="Корзина")
      .app-header-quantity.link.__muted {{cart.dishes.length}}
    main
      section.row
        .col
          CartCard(:dish="cart.dishes[0]" :quantity="2")
          CartCard(:dish="cart.dishes[0]" :quantity="3")
          CartCard(:dish="cart.dishes[0]" :quantity="1")
          hr
          Input(placeholder="Промокод", value='HuiPizda')
            img(src="./assets/cart/promo.svg", alt="Промокод")
      
          RecomendationCard(:dish="cart.dishes[0]")
          Button(text="Оформить за 900 ₽")
 </template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import CartCard from "@/components/cart/CartCard";
import RecomendationCard from "@/components/cart/RecomendationCard";
import Input from "@/components/form/Input";
import Button from "@/components/form/Button";

export default {
  components: {
    AppHeader,
    CartCard,
    RecomendationCard,
    Input,
    Button
  },
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
      }
    };
  }
};
</script>

<style lang="scss" scoped>
#page {
  padding-bottom: 155px;
}
main {
  padding-top: 20px;
}
.app-header-quantity {
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
.recomendation {
  margin-bottom: 20px;
  margin-top: 20px;
}
.btn-group {
  box-shadow: 0 -10px 30px 0 var(--bg), 20px 20px 0 0 var(--bg),
    -20px 20px 0 0 var(--bg);
  position: fixed;
  bottom: 98px;
  width: calc(100% - var(--view-margin) * 2) !important;
}
</style>
