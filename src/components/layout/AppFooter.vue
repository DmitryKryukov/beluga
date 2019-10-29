<template lang="pug">
  footer.app-footer  

    router-link(:to="{path: '/'}" )
      .app-footer__item(@click="routerClick")
        <img svg-inline class="app-footer__item__icon" :src="../assets/footer/menu.svg" alt="" />
        //todo svg-inline-loader парсит только html формат, возможно нужно заменить
        .app-footer__item__text Меню
    
    router-link(:to="{path: '/favourite'}")
      .app-footer__item(@click="routerClick")
        <img svg-inline class="app-footer__item__icon" :src="../assets/footer/favourite.svg" alt="" />
        .app-footer__item__text Любимое
    
    router-link(:to="{path: '/about'}")
      .app-footer__item(@click="routerClick")
        <img svg-inline class="app-footer__item__icon" :src="../assets/footer/about.svg" alt="" />
        .app-footer__item__text О нас
    
    router-link(:to="{path: '/profile'}")
      .app-footer__item(@click="routerClick")
        <img svg-inline class="app-footer__item__icon" :src="../assets/footer/profile.svg" alt="" />
        .app-footer__item__text Профиль

    router-link(:to="{path: '/cart'}")
      .app-footer__item(@click="routerClick")
        <img svg-inline class="app-footer__item__icon" :src="../assets/footer/cart.svg" alt="" />
        .app-footer__item__text Корзина
        .app-footer__item__badge(ref="cartBadge", :class="{'app-footer__item__badge--show':store.cart.length !== 0}") {{ store.cart.length }}
</template>

<script>
let nextFooterItemId = 0;
import store from "@/store/store";

export default {
  data() {
    return { store };
  },
  methods: {
    routerClick() {
      this.$emit("nextView", window.pageYOffset);
    }
  },
  watch: {
    "store.cart.length": function() {
      this.$refs.cartBadge.classList.add("app-footer__item__badge--change");
      setTimeout(() => {
        this.$refs.cartBadge.classList.remove(
          "app-footer__item__badge--change"
        );
      }, 100);
    }
  }
};
</script>

<style scoped  lang="scss">
.app-footer {
  position: sticky;
  bottom: 0;
  width: 100vw;
  padding: 8px 0 30px;
  background-color: var(--plain);
  border-top: var(--border);
  backdrop-filter: var(--backdrop);
  display: flex;
  z-index: 9999;
  & > * {
    flex: 1 100%;
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--color-muted);
    position: relative;

    &__icon {
      height: 34px;
      line-height: 41px;
      margin-bottom: 2px;
    }
    &__text {
      font-size: var(--font-size-footer);
      text-align: center;
    }
    &__badge {
      background-color: var(--primary);
      color: var(--color);
      font-size: 0.5em;
      min-width: 8px;
      min-height: 8px;
      border-radius: 10px;
      text-align: center;
      padding: 2px 2px;
      position: absolute;
      top: 5%;
      left: 60%;
      transform: scale(0);
      transition: all 0.1s var(--ease);
      &--show {
        transform: scale(1);
      }
      &--change {
        transform: scale(1.2);
      }
    }
  }
}
.router-link-exact-active {
  .app-footer__item {
    color: var(--color);
  }
}
</style>