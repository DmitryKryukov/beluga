<template lang="pug">
 header.app-header
    h1.app-header__title {{title}}
    aside.app-header__aside
      slot
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Заголовок страницы"
    }
  }
};
</script>
<style scoped  lang="scss">
.app-header {
  padding: 19px var(--view-margin) 19px;
  padding-top: 65px;
  background-color: var(--plain);
  border-bottom: var(--border);
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  &__title {
    font-family: var(--font-family-accent);
    font-weight: bold;
    line-height: 41px;
    font-feature-settings: "pnum" on, "lnum" on, "ordn" on;
    font-size: var(--font-size-title);
  }
}
</style>