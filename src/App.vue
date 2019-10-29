<template lang="pug">
  #app
    .main-wrapper
      transition(name="slide")
        router-view(@nextView = "preserveScrollPosition")
    app-footer(@nextView = "preserveScrollPosition")
</template>

<script>
import appFooter from "@/components/layout/AppFooter";

export default {
  name: "app",
  components: {
    appFooter
  },
  methods: {
    preserveScrollPosition(viewScrollY) {
      let scroll = "-" + viewScrollY + "px";
      document.documentElement.style.setProperty("--scrollYView", scroll);
    }
  }
};
</script>
<style lang="scss">
@import "./styles/global.scss";
.main-wrapper {
  min-height: calc(100vh - 85px);
}
</style>
