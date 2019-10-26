<template lang="pug">
  .discount-card
    .discount-card__name {{ name }}
    .discount-card__description(v-if="description") {{ description }}
    .discount-card__code(v-if="code") {{ code }}
</template>

<script>
import store from "@/store/store";
export default {
  props: {
    name: { type: String, default: "Название акции" },
    description: { type: String },
    code: { type: String, default: "Code30" }
  }
};
</script>
<style scoped lang="scss">
@import "../../styles/mixins";
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
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  box-sizing: border-box;
  padding: var(--view-margin) var(--view-margin) 20px;
  &__name {
    line-height: 24px;
  }
  &__description {
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }
  &__code {
    margin-top: auto;
    background-color: var(--color);
    color: var(--bg);
    font-size: 0.8rem;
    padding: 4.5px 7px 4.5px 9px;
    border-radius: 2px;
    //transform: skewY(-2deg);
    transform-origin: left bottom;
    @include caption;
    color: var(--bg);
  }
}
</style>