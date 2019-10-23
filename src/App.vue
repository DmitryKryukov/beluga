<template lang="pug">
  #app
    .main-wrapper
      transition(name="slide")
        router-view(@nextView = "viewScroll")
    AppFooter(@nextView = "viewScroll")
</template>

<script>
import AppFooter from "@/components/layout/AppFooter";

export default {
  name: "app",
  components: {
    AppFooter
  },
  methods: {
    viewScroll(viewScrollY) {
      let scroll = "-" + viewScrollY + "px";
      document.documentElement.style.setProperty("--scrollYView", scroll);
    }
  }
};
</script>
<style src="./styles/global.scss" lang="scss"></style>
<style scoped lang="scss">
.main-wrapper {
  min-height: calc(
    100vh - 85px
  ); //Свойство добавлено, чтобы подвал не прыгал при изменении позишн содержимого на фиксед. 85px — высота футера
}
.slide-enter-active,
.slide-leave-active {
  position: fixed;
  width: 100vw;
  height: 100vh;
  transition: all 0.3s var(--ease);
}
.slide-leave-active {
  top: var(--scrollYView);
}
.slide-enter {
  transform: translateX(50vw);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-50vw);
  opacity: 0;
}
</style>
