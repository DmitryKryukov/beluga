<template lang="pug">
    .input-group
      .input-icon 
        slot
      input(type='text', name='name',:value='inputValue', @keyup='input', @click='inputFocus', @blur='inputBlur' ref="input",  autocomplete="off").input            
      span.input-placeholder {{placeholder}}
      .input-indicator(ref="inputIndicator")
 </template>
 

<script>
export default {
  props: {
    placeholder: {
      String
    },
    value: {
      String,
      default: ""
    },
    name: {
      String,
      default: null
    }
  },
  data() {
    return {
      inputValue: undefined
    };
  },
  mounted() {
    this.inputValue = this.value;
  },
  watch: {
    inputValue: function(newVal, oldVal) {
      this.$refs.input.setAttribute("value", newVal);
    }
  },
  methods: {
    input: function(event) {
      this.inputValue = event.target.value.trim();
    },
    inputFocus: function(event) {
      let clickPosition = {
        x: event.clientX - this.$refs.input.getBoundingClientRect().left
      };
      document.documentElement.style.setProperty(
        "--inputIndicatorPosition",
        clickPosition.x + "px"
      );
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
        ripple.style.left = clickPosition.x - 5 + "px";
        ripple.style.top = clickPosition.y - 5 + "px";
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
.input {
  box-sizing: border-box;
  padding: 31px 0 8px;
  font-size: 17px;
  border: none;
  background-color: transparent;
  color: var(--color);
  color: transparent;
  width: 100%;
  position: relative;
  font-family: var(--font-family);
  transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  &-icon {
    position: absolute;
    right: 0;
    width: 50px;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    pointer-events: none;
    & > * {
      margin-top: 1px;
    }
  }
  &-indicator {
    width: 100%;
    height: 1px;
    background-color: var(--color-muted-transparent);
    position: absolute;
    bottom: 0;
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
    overflow: hidden;

    &:after {
      content: "";
      display: block;
      position: absolute;
      left: var(--inputIndicatorPosition);
      right: calc(100% - var(--inputIndicatorPosition));
      bottom: 0;
      top: 0;
      background-color: var(--primary);
      transition: all 0.5s cubic-bezier(0.42, 0, 0.58, 1);
    }
  }
  &-placeholder {
    position: absolute;
    width: calc(100% var(--grid-gap));
    left: 0;
    font-size: 17px;
    top: 25px;
    color: var(--color-muted);
    transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
    pointer-events: none;
  }
  &-group {
    width: 100%;
    margin-top: var(--view-gap);
    position: relative;
    overflow: hidden;
    &__small {
      width: calc(50% - var(--view-gap) / 2);
    }
    &:focus-within {
      border-radius: var(--border-radius) var(--border-radius) 0 0;
      & > input {
        color: var(--color);
        background-color: var(--color-muted-transparent);
        padding-left: 10px;
        padding-right: 10px;
        border-radius: var(--border-radius) var(--border-radius) 0 0;
      }
      & > .input-placeholder {
        top: 9px;
        font-size: 13px;
        left: 10px;
      }
      .input-indicator {
        height: 2px;
        transition: all 0.2s cubic-bezier(0.42, 0, 0.58, 1);
        &:after {
          //todo переделать без псевдоэлементов
          left: calc(var(--inputIndicatorPosition) - 100%);
          right: calc(var(--inputIndicatorPosition) - 100%);
        }
      }
    }
  }
}
.input {
  &:not([value=""]) {
    color: var(--color);
    & + .input-placeholder {
      top: 9px;
      font-size: 13px;
    }
  }
}
</style>
