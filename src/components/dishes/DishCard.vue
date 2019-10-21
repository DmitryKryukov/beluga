<template lang="pug">
  router-link(:to = "'/dish/' + dish.id")
    .dish-card(@click = "cardClick")
      .dish-card__photo
      h2.dish-card__name {{dish.name}}
      footer.dish-card__footer
        span.dish-card__footer__aside(v-if = "dish.aside") {{dish.aside}}
        button.dish-card__footer__btn(@click.prevent.stop = "addToCart") {{dish.price}}
</template>

<script>
export default {
  props: {
    dish: {
      type: Object,
      required: true
    }
  },
  methods: {
    cardClick() {},
    addToCart() {}
  }
};
</script>
<style scoped lang="scss">
@import "../../styles/mixins";
.dish-card {
  display: block;
  min-height: 218px;
  background-color: var(--plain);
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
  transition: all 1s;

  &__photo {
    pointer-events: none;
    background-image: var(--grad-placeholder);
    background-color: #3c3f43;
    width: 100%;
    padding-bottom: 68.452%;
  }
  &__name {
    pointer-events: none;
    font-size: var(--font-size-heading);
    margin: 10px 13px 53px;
    line-height: 20px;
  }
  &__footer {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 0 13px 15px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    pointer-events: none;
    &__aside {
      font-size: 10px;
      line-height: 12px;
      letter-spacing: 0.05em;
      color: var(--color-muted);
    }
    &__btn {
      padding: 3px 8px 4px 6px;
      margin-left: auto;
      pointer-events: all;
      @include btn();
    }
  }
}
</style>