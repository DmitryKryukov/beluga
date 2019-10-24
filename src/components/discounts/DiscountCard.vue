<template lang="pug">
  .discount-card
    .discount-card__name
</template>

<script>
import store from "@/store/store";
export default {};
</script>
<style scoped lang="scss">
.discount-card {
  min-width: 227px;
  width: 100%;
  min-height: 128px;
  background-color: var(--plain);
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
  background-image: var(--grad-placeholder);
  background-color: #3c3f43;
}
</style>