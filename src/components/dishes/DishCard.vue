<template lang="pug">
    .dish-card(ref="card", @click = "goToDishView")
      header.dish-card__header
        .dish-card__header__favourite(ref="favourite"  @click.stop="addToFavourite" :class="{'dish-card__header__favourite--active': dishData.favourite}")
          <img svg-inline :src="../assets/footer/favourite.svg" alt=""/>
        router-link(:to = "'/dish/' + dishData.id")
          .dish-card__header__photo(@click = "goToDishView")
      router-link(:to = "{path: '/dish/' + dishData.id}" )    
        h2.dish-card__name(@click = "goToDishView") {{dishData.name}}
        footer.dish-card__footer(@click = "goToDishView")          
          button.dish-card__footer__btn + {{dish.price}}
          span.dish-card__footer__aside(v-if = "dish.aside") {{dish.aside}}
</template>

<script>
import store from "@/store/store";

export default {
  props: {
    dish: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dishData: {},
      store
    };
  },
  mounted() {
    this.dishData = this.dish;
  },
  methods: {
    goToDishView() {
      this.$emit("nextView", window.pageYOffset);
    },
    addToFavourite() {
      this.dishData.favourite = !this.dishData.favourite;
      ripple(event, this.$refs.favourite);
      function ripple(e, el) {
        const rect = {
          top: el.getBoundingClientRect().top + el.offsetParent.scrollTop,
          left: el.getBoundingClientRect().left + el.offsetParent.scrollLeft
        };
        var clickPosition = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
        var ripple = document.createElement("div");
        ripple.className = "rippler";
        ripple.style.left = clickPosition.x - 5 + "px";
        ripple.style.top = clickPosition.y - 5 + "px";
        el.appendChild(ripple);
        ripple.addEventListener("animationend", function() {
          ripple.remove();
        });
      }
      if (this.dishData.favourite) {
        this.store.favourite.push(this.dishData);
      } else {
        let i = 0;
        this.store.favourite.forEach(function(item) {
          if (item.id == this.dishData.id) {
            if (this.$route.path === "/favourite") {
              this.$refs.card.style.opacity = 0;
              this.$refs.card.style.marginBottom =
                "-" + this.$refs.card.clientHeight - 9 + "px";
              store.favourite.splice(i, 1);
            } else {
              store.favourite.splice(i, 1);
            }
          }
          i += 1;
        }, this);
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import "../../styles/mixins";
.dish-card {
  display: flex;
  flex-direction: column;
  min-height: 218px;
  background-color: var(--plain);
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
  transition: all 1s;

  &__header {
    &__photo {
      background-image: var(--grad-placeholder);
      background-color: #3c3f43;
      width: 100%;
      padding-bottom: 68.452%;
    }
    &__favourite {
      position: absolute;
      top: 2px;
      left: 4px;
      height: 1.5rem;
      width: 2rem;
      height: 2rem;
      color: transparent;
      stroke: var(--color-muted);
      stroke-width: 0.1rem;
      overflow: hidden;
      border-radius: 50%;
      z-index: 2;
      transition: color 0.3s var(--ease), stroke-width 0.3s var(--ease),
        transform 0.3s var(--ease);
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 80%;
        margin-top: 2px;
      }
      &:active {
        transform: scale(1.3);
      }
      &--active {
        color: var(--color);
        stroke-width: 0;
      }
    }
  }
  &__name {
    font-size: var(--font-size-heading);
    margin: 10px 13px 53px;
    line-height: 20px;
  }
  &__footer {
    position: absolute;
    bottom: 15px;
    box-sizing: border-box;
    width: 100%;
    padding: 0 13px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    &__aside {
      font-size: 10px;
      line-height: 12px;
      letter-spacing: 0.05em;
      color: var(--color-muted);
      margin-left: auto;
    }
    &__btn {
      padding: 3px 8px 4px 6px;
      @include btn;
    }
  }
}
/deep/ .rippler {
  @keyframes ripplerScale {
    from {
      transform: scale(1);
      opacity: 0.3;
    }
    to {
      transform: scale(10);
      opacity: 0;
    }
  }
  width: 10px;
  height: 10px;
  animation: ripplerScale 0.5s cubic-bezier(0.42, 0, 0.58, 1);
}
</style>