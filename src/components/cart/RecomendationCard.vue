<template lang="pug">
    .recomendation(@click="cardClick" ref="recomendationCard")
      .recomendation-close(@click="cardClose")
      .recomendation-photo
      .recomendation-info
        .recomendation-info-title Не забудьте соусы
        h2.recomendation-info-name Аджика
        .recomendation-info-aside 100 мл.
        a.recomendation-info-link.link Добавить
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
    },
    cardClose() {
      this.$refs.recomendationCard.style.opacity = 0;
      this.$refs.recomendationCard.style.minHeight = 0;
      this.$refs.recomendationCard.style.height = 0;
      this.$refs.recomendationCard.style.marginBottom = 0;
      this.$refs.recomendationCard.style.marginTop = 0;
      this.$refs.recomendationCard.style.transform = "scale(.9)";
    }
  }
};
</script>
<style scoped lang="scss">
.recomendation {
  display: block;
  min-height: 125px;
  background-color: var(--plain);
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
  transition: all 0.3s;
  display: flex;
  transform-origin: top;
  &-close {
    width: 16px;
    height: 18px;
    padding: var(--view-gap);
    background-image: url("../assets/cross.svg");
    background-size: 14px 14px;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0.5;
  }
  &-photo {
    pointer-events: none;
    position: absolute;
    //background-image: var(--grad-placeholder);
    //background-color: #3c3f43;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &-info {
    z-index: 1;
    margin-left: 168px;
    padding: 17px 17px 19px 0;
    &-aside {
      color: var(--color-muted);
      font-size: 13px;
      line-height: 15px;
      letter-spacing: 0.05em;
    }
    &-title {
      font-size: 9px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      line-height: 15px;
    }
    &-name {
      pointer-events: none;
      font-size: var(--font-size-heading);
      margin: var(--view-gap) 0;
    }
    &-link {
      margin-top: var(--view-gap);
      display: inline-block;
      color: var(--primary);
      letter-spacing: 0;
    }
  }
}
</style>