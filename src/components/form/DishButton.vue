<template lang="pug">
    .btn-group
      slot(name='prefix')
      button(@click="btnClick").btn  {{text}}
      button.btn__plus
        
 </template>
 

<script>
export default {
  props: {
    text: {
      String
    }
  },
  data() {
    return {
      inputValue: undefined
    };
  },
  mounted() {},
  methods: {
    btnClick: function(event) {
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
        e.target.parentNode.appendChild(ripple);
        ripple.addEventListener("animationend", function() {
          ripple.remove();
        });
      }
      this.$emit("addToCart", this);
    },
    inputBlur: function(event) {
      this.$emit("inputData", this);
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  text-align: left;
  box-sizing: border-box;
  padding: 17px 21px 18px;
  font-size: 17px;
  border: none;
  border-radius: 0;
  background-color: transparent;
  width: 100%;
  position: relative;
  font-family: var(--font-family);
  transition: all 0.3s var(--ease);
  user-select: none;
  &__plus {
    position: absolute;
    padding: 0;
    top: 4px;
    bottom: 4px;
    right: 5px;
    width: 45px;
    background: url("../assets/plus.svg");
    height: calc(100% - 10px);
    border-radius: 50%;
    z-index: 2;
    border: none;
    pointer-events: none;
  }

  &-group {
    width: 100%;
    background-color: var(--primary);
    border-radius: var(--border-radius);
    border-bottom: 2px solid #523924;
    transition: all 0.1s var(--ease);
    overflow: hidden;
    position: relative;
    z-index: 2;
    &:active {
      transform: scale(0.96);
    }
  }
}
</style>
