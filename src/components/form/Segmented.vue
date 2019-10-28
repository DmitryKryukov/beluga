<template lang="pug">
    .wrapper
      .segmented(ref="segmented")
        .segmented__item(v-for="segmentName in segmentNames", @click = "sigmentClick") {{segmentName}} 
      slot
 </template>
 

<script>
export default {
  props: {
    segmentNames: {
      Array
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.$refs.segmented.childNodes[0].classList.add("segmented__item--active");
  },
  methods: {
    sigmentClick(event) {
      let previousActiveSegment = this.$refs.segmented.querySelector(
        ".segmented__item--active"
      );
      previousActiveSegment.classList.remove("segmented__item--active");
      event.target.classList.add("segmented__item--active");
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

<style lang="scss" scoped>
@import "../../styles/mixins";
.segmented {
  display: flex;
  color: var(--color-muted);
  border-radius: var(--border-radius);
  border: 1px solid var(--color-muted);
  overflow: hidden;
  &__item {
    @include uppercase;
    position: relative;
    flex: 1 1 auto;
    max-width: 50%;
    text-align: center;
    overflow: hidden;
    padding: var(--view-margin) 0;
    transition: all 0.3s var(--ease);
    &--active {
      background-color: var(--color-muted);
      color: var(--bg);
    }
  }
}
</style>
