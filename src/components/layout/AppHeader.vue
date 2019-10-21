<template lang="pug">
 header.app-header
    h1.app-header-title {{title}}
    aside.app-header-aside
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
  padding-top: 65px; //Для телефонов с бровью
  background-color: var(--plain);
  border-bottom: var(--border);
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  &-title {
    font-family: var(--font-family-accent);
    font-weight: bold;
    line-height: 41px;
    font-feature-settings: "pnum" on, "lnum" on, "ordn" on;
    font-size: var(--font-size-title);
  }
}
</style>