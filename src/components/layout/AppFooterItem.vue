<template lang="pug">
  router-link(:to="{path: footerItem.href}")
    .app-footer-item
      .app-footer-item-icon
      .app-footer-item-text {{footerItem.text}}
</template>

<script>
export default {
  props: {
    footerItem: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped lang="scss">
.app-footer-item {
  &-icon {
    height: 34px;
    line-height: 41px;
  }
  &-text {
    font-size: var(--font-size-footer);
    text-align: center;
  }
}
</style>