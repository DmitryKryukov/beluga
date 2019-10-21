<template lang="pug">
  router-link(:to="'/dish/' + dish.id")
    .dish-card(@click="cardClick")
      .dish-card-photo
      h2.dish-card-name {{dish.name}}
      footer.dish-card-footer
        span.dish-card-footer-aside(v-if="dish.aside") {{dish.aside}}
        button.dish-card-footer-btn.btn(@click.prevent.stop="addToCart") {{dish.price}}
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
    cardClick() {
      //ripple(event);

      function ripple(e) {
        const rect = {
          top: e.target.offsetTop,
          left: e.target.getBoundingClientRect().left
        };
        console.log(e.target);
        var clickPosition = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top + window.pageYOffset
        };
        var ripple = document.createElement("div");
        ripple.className = "rippler";
        ripple.style.left = clickPosition.x + "px";
        ripple.style.top = clickPosition.y + "px";
        e.target.appendChild(ripple);
        ripple.addEventListener("animationend", function() {
          ripple.remove();
        });
      }
    },
    addToCart() {
      alert("Добавлено в корзину");
    }
  }
};
</script>
<style scoped lang="scss">
.dish-card {
  display: block;
  min-height: 218px;
  background-color: var(--plain);
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
  transition: all 1s;

  &-photo {
    pointer-events: none;
    background-image: var(--grad-placeholder);
    background-color: #3c3f43;
    width: 100%;
    padding-bottom: 68.452%;
  }
  &-name {
    pointer-events: none;
    font-size: var(--font-size-heading);
    margin: 10px 13px 53px;
    line-height: 20px;
  }
  &-footer {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 0 13px 15px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    pointer-events: none;
    &-aside {
      font-size: 10px;
      line-height: 12px;
      letter-spacing: 0.05em;
      color: var(--color-muted);
    }
    &-btn {
      padding: 3px 8px 4px 6px;
      margin-left: auto;
      pointer-events: all;
    }
  }
}
</style>