<template lang="pug">
    .btn-group
      button(@click="btnClick").btn: slot(name='prefix') {{text}}
        slot(name='postfix')
        
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
    },
    inputBlur: function(event) {
      this.$emit("inputData", this);
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
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
