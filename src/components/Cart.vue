<template lang="pug">
  #page
    app-header(title="Корзина"): .app-header__quantity {{store.cart.length}}
    
    main
      section: .row: .col
        template(v-if="store.cart.length == 0")
          .cart__empty
            .cart__empty__image 
            .cart__empty__heading В корзине нет ни одного блюда
            .cart__empty__text Нажмите на значок в карточке блюда, чтобы добавить первое
        
        template(v-if="store.cart.length !== 0")
          cart-card(v-for="cartItem in store.cart", :dish="cartItem.dish", :quantity="cartItem.cartQuantity", @calcPrice="priceCalc")
            
          hr
          rich-input(placeholder="Промокод", value='HuiPizda')
            img(src="./assets/cart/promo.svg", alt="Промокод")

          recomendation-card(title="Не забудьте соус", :dish = "recomendedDish", callToAction = "Добавить")

          footer.cart-footer
            router-link(:to = "{path: '/cart/checkout'}" )   
            rich-button(:text="'Оформить за ' + priceSum + '\xa0₽'" )
 </template>

<script>
import appHeader from "@/components/layout/AppHeader";
import cartCard from "@/components/cart/CartCard";
import recomendationCard from "@/components/cart/RecomendationCard";
import richInput from "@/components/form/Input";
import richButton from "@/components/form/Button";
import store from "@/store/store";

export default {
  components: {
    appHeader,
    cartCard,
    recomendationCard,
    richInput,
    richButton
  },
  mounted() {
    this.priceCalc();
  },
  data() {
    return {
      recomendedDish: {
        id: 0,
        name: "Аджика",
        aside: "50\xa0мл",
        price: "+\xa0295\xa0₽"
      },
      store,
      priceSum: 0
    };
  },
  methods: {
    priceCalc() {
      let price = 0;
      store.cart.forEach(cartItem => {
        price += cartItem.dish.price.slice(0, -2) * cartItem.cartQuantity;
      });
      this.priceSum = price;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";
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

.cart__empty {
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
