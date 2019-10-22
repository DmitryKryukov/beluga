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
</template>

<script>
let nextFooterItemId = 0;

export default {
  data() {
    return {};
  },
  methods: {
    routerClick() {
      this.$emit("nextView", window.pageYOffset);
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
  .router-link-exact-active {
    .app-footer__item {
      color: var(--color);
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--color-muted);

    &__icon {
      height: 34px;
      line-height: 41px;
      margin-bottom: 2px;
    }
    &__text {
      font-size: var(--font-size-footer);
      text-align: center;
    }
  }
}
</style>