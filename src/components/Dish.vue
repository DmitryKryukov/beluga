<template lang="pug">
  #page
    section
      .row
        .col
          .dish__header
            .dish__header__favourite(ref="favourite", @click = "addToFavourite")
              <img svg-inline src="./assets/footer/favourite.svg">
            router-link(:to = "{path: '/'}" )
              .dish__header__cross(@click = "prevView")
                <img svg-inline src="./assets/cross white thin.svg">              
            .dish__header__photo
          .dish__info
            .dish__info__name {{ dish.name }}
            .row
              .dish__info__category {{category.name}}
              .dish__info__aside {{ dish.aside }}
            .dish__info__caption Ингредиенты
            .dish__info__ingredient Филе щуки, морковь, лук репчатый, чёрный перец, красный перец, соль
          .toast.toast--enter(ref="toast")
            .toast__text Добавлено в корзину
          footer.dish__footer
            DishButton(:text="dish.price", @addToCart = "addToCart").dish__footer__btn
    
 </template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import DishButton from "@/components/form/DishButton";
import store from "@/store/store";

export default {
  components: {
    AppHeader,
    DishButton
  },
  data() {
    return {
      cartQuantity: 0,
      dish: {},
      category: {}
    };
  },
  mounted: function() {
    let find = false;
    store.categories.forEach(category => {
      category.dishes.forEach(dish => {
        if (dish.id == this.$route.params.id) {
          this.dish = dish;
          find = true;
        }
      });
      if (find) {
        this.category = category;
        find = false;
      }
    });
    if (this.dish.favourite) {
      this.$refs.favourite.classList.add("dish__header__favourite--active");
    }
  },
  methods: {
    addToFavourite() {
      event.target.classList.toggle("dish__header__favourite--active");
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
    },
    prevView() {
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
      document.documentElement.style.setProperty("--scrollYView", 0);
    },
    addToCart() {
      this.cartQuantity++;
      if (this.$refs.toast.classList.contains("toast--enter")) {
        this.$refs.toast.classList.remove("toast--enter");
        setTimeout(() => {
          this.$refs.toast.classList.add("toast--leave");
          setTimeout(() => {
            this.$refs.toast.classList.remove("toast--leave");
            this.$refs.toast.classList.add("toast--enter");
          }, 300);
        }, 1000);
      }
      if (this.cartQuantity > 1) {
        this.$refs.toast.childNodes[0].textContent =
          "Добавлено в корзину: " + this.cartQuantity;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/mixins";
.dish {
  &__header {
    width: calc(100% + var(--view-margin) * 2);
    margin-left: calc(var(--view-margin) * -1);
    margin-right: calc(var(--view-margin) * -1);
    margin-bottom: 0;
    &__photo {
      height: 255px;
      background: var(--grad-placeholder);
    }
    &__cross {
      width: 45px;
      height: 45px;
      position: absolute;
      top: var(--view-gap);
      right: var(--view-gap);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      svg {
        opacity: 0.5;
        pointer-events: none;
      }
    }
    &__favourite {
      width: 45px;
      height: 45px;
      position: absolute;
      top: var(--view-gap);
      left: var(--view-gap);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: transparent;
      overflow: hidden;
      transition: color 0.2s var(--ease);
      &:active {
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        opacity: 0.5;
        stroke: white;
        stroke-width: 1px;
        height: 26px;
        pointer-events: none;
        transition: all 0.2s var(--ease);
      }
      &--active {
        color: white;
        svg {
          opacity: 1;
          stroke-width: 0;
        }
      }
    }
  }
  &__info {
    padding-top: 20px;
    &__name {
      @include heading;
      line-height: 1.25;
    }
    .row {
      justify-content: space-between;
      margin: 20px 0 45px;
    }
    &__category {
      @include uppercase;
    }
    &__aside {
    }
    &__caption {
      @include caption;
      margin-bottom: var(--view-margin);
    }
    &__ingredient {
      @include body;
    }
  }
  &__footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 85px;
    padding: 0 var(--view-margin) var(--view-margin);
  }
}

.toast {
  position: fixed;
  bottom: 164px;
  left: var(--view-margin);
  right: var(--view-margin);
  width: calc(100% - var(--view-margin) * 4);
  color: var(--color-muted);
  background-color: var(--plain);
  padding: var(--view-margin);
  border-radius: var(--border-radius);
  transition: all 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  transform: translateY(0);
  opacity: 1;
  &--enter {
    transform: translateY(20px);
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    opacity: 0;
  }
  &--leave {
    transform: translateY(-10px) scale(0.9);
    opacity: 0;
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  }
}
</style>
