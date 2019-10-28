<template lang="pug">
  .wrapper(ref="wrapper", v-touch:end="cartCardTouch")
    .wrapper-inner
      .cart-card(ref="card")
        .cart-card__photo
        .cart-card__col
          h2.cart-card__name {{dish.name}}
          .cart-card__footer
            .cart-card__footer__quantity
              .cart-card__footer__quantity--minus(@click.stop.prevent="quantityClick") −
              .cart-card__footer__quantity--current {{Quantity}}
              .cart-card__footer__quantity--plus(@click.stop.prevent="quantityClick") +
            footer.cart-card__footer__price
              .cart-card__footer__price--main {{dish.price.slice(0,-2) * Quantity}}
              .cart-card__footer__price--aside &thinsp;₽
      .cart-card__delete

</template>

<script>
let scrollPerception = 10;
let scrollMax = 0;
let scroll = 0;
let open = false;
export default {
  props: {
    dish: {
      type: Object,
      required: true
    },
    quantity: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      Quantity: 1
    };
  },
  mounted: function() {
    scrollMax = this.$refs.wrapper.scrollWidth - this.$refs.card.offsetWidth;
    scrollPerception = scrollMax * 0.15;
    this.Quantity = this.quantity;
  },
  methods: {
    cardClick() {
      //ripple(event);

      function ripple(e) {
        const rect = {
          top: e.target.offsetTop,
          left: e.target.getBoundingClientRect().left
        };
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
    cartCardTouch() {
      scroll = this.$refs.wrapper.scrollLeft;

      if (!open) {
        if (scroll > scrollPerception) {
          open = true;
        }
      } else {
        if (scroll < scrollMax - scrollPerception) {
          open = false;
        }
      }
      if (open) {
        this.$refs.wrapper.scrollLeft = scrollMax;
      } else {
        this.$refs.wrapper.scrollLeft = 0;
      }
    },
    quantityClick: function(event) {
      if (
        event.target.classList.contains("cart-card__footer__quantity--minus")
      ) {
        if (this.Quantity > 1) {
          this.Quantity -= 1;
        } else {
          alert("Делит зис пис оф щит");
        }
      } else {
        this.Quantity += 1;
      }

      ripple(event);
      function ripple(e) {
        const rect = {
          top:
            e.target.getBoundingClientRect().top +
            e.target.offsetParent.scrollTop,
          left:
            e.target.getBoundingClientRect().left +
            e.target.offsetParent.scrollLeft
        };
        var clickPosition = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
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
    }
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  width: calc(100vw - var(--view-margin) * 2);
  margin-left: -15%;
  padding-left: 15%;
  border-radius: var(--border-radius);
  overflow: scroll;
  scroll-behavior: smooth;
  &-inner {
    position: relative;
    width: 115%;
  }
}
.cart-card {
  display: flex;
  min-height: 100px;
  background-color: #121519;
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
  transition: all 1s;
  width: calc(100vw - var(--view-margin) * 2);
  &__photo {
    pointer-events: none;
    background-image: var(--grad-placeholder);
    background-color: #3c3f43;
    width: 130px;
  }
  &__col {
    width: calc(100% - 130px);
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
    width: calc(100% - 130px);
    padding: 12px 9px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__quantity {
      display: flex;
      align-items: center;
      &--minus,
      &--plus {
        position: relative;
        padding: 4px;
        background-color: var(--plain);
        color: var(--color-muted);
        text-align: center;
        height: 1.05rem;
        width: 1.05rem;
        border-radius: 50%;
        overflow: hidden;
      }
      &--current {
        color: var(--color-muted);
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
    }
    &__price {
      display: flex;
      align-items: baseline;
      margin-right: var(--view-gap);
      &--main {
        font-size: 19px;
      }
      &--aside {
        font-size: 16px;
      }
    }
  }
  &__delete {
    position: absolute;
    left: 1px;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--danger);
    border-radius: var(--border-radius);
    z-index: -1;
    &::after {
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      background: url("../assets/cross white.svg");
      color: white;
      background-size: contain;
      position: absolute;
      left: 362px;
      top: calc(50% - 10px);
    }
  }
}
</style>