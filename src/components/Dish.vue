<template lang="pug">
  #page
    section
      .row
        .col
          .dish__header
            .dish__header__photo
          .dish__info
            .dish__info__name Лопатка ягнёнка
            .row
              .dish__info__category Мясо
              .dish__info__aside 250 г
            .dish__info__caption Ингредиенты
            .dish__info__ingredient Филе щуки, морковь, лук репчатый, чёрный перец, красный перец, соль
          .toast.toast--enter(ref="toast")
            .toast__text Добавлено в корзину
          footer.dish__footer
            DishButton(text="1279 ₽", @addToCart = "addToCart").dish__footer__btn
    
 </template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import DishButton from "@/components/form/DishButton";
import store from "@/store/store";

export default {
  components: {
    AppHeader,
    DishButton
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    addToCart() {
      this.$refs.toast.classList.remove("toast--enter");
      setTimeout(() => {
        this.$refs.toast.classList.add("toast--leave");
        setTimeout(() => {
          this.$refs.toast.classList.remove("toast--leave");
          this.$refs.toast.classList.add("toast--enter");
        }, 300);
      }, 1000);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/mixins";
.dish {
  &__header {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    &__photo {
      height: 250px;
      background-color: var(--plain);
    }
  }
  &__info {
    margin-top: 250px;
    padding-top: 20px;
    &__name {
      @include heading;
    }
    .row {
      justify-content: space-between;
      margin: var(--view-margin) 0 45px;
    }
    &__category {
      @include uppercase;
    }
    &__aside {
    }
    &__caption {
      @include caption;
      margin-bottom: var(--view-margin);
    }
    &__ingredient {
      @include body;
    }
  }
  &__footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 85px;
    padding: 0 var(--view-margin) var(--view-margin);
  }
}

.toast {
  position: fixed;
  bottom: 164px;
  left: var(--view-margin);
  right: var(--view-margin);
  width: calc(100% - var(--view-margin) * 4);
  color: var(--color-muted);
  background-color: var(--plain);
  padding: var(--view-margin);
  border-radius: var(--border-radius);
  transition: all 0.1s;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  transform: translateY(0);
  opacity: 1;
  &--enter {
    transform: translateY(20px);
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    opacity: 0;
  }
  &--leave {
    transform: translateY(-20px) scale(0.9);
    opacity: 0;
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  }
}
</style>
