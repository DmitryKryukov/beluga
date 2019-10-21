<template lang="pug">
  #app
    .main-wrapper     
      transition(name="slide")
        router-view
    AppFooter
</template>

<script>
import AppFooter from "@/components/layout/AppFooter";

export default {
  name: "app",
  components: {
    AppFooter
  }
};
</script>
<style src="./styles/global.scss" lang="scss"></style>
<style scoped lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  width: 100vw;
  position: absolute;
  height: 100vh;
  overflow: hidden;
}
.slide-leave-active {
}
.slide-enter-active {
  position: fixed;
}
.slide-enter {
  transform: translateX(100vw);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-100vw);
  opacity: 0;
}
</style>
