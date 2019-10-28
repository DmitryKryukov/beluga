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
  padding: 10px var(--view-margin) var(--view-margin);
  mix-blend-mode: screen;
  &__name {
    line-height: 24px;
  }
  &__description {
    font-size: 0.7rem;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
  }
  &__code {
    margin-top: auto;
    font-size: 0.8rem;
    padding: 4.5px 10px 4.5px 15px;
    border-radius: 2px;
    transform-origin: left bottom;
    mix-blend-mode: screen;
    @include caption;
    background-color: var(--color-muted);
    color: black;
    font-weight: bold;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 5px;
      width: 1px;
      //border-left: 1px dashed var(--color-muted);
      border-left: 1px dashed black;
    }
    &:after {
      content: "";
      position: absolute;
      top: calc(50% - 4px);
      right: -5px;
      bottom: 0;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: black;
    }
  }
}
</style>