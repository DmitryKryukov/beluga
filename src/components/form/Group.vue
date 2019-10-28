<template lang="pug">
    .group(:class="{active: Active}", ref="group")
        .group-title(@click="activeToogle", ) 
            span.group-title-text {{title}}
            .group-title-delete(@click.stop='groupDelete')
        .group-content
            slot
</template>

<script>
import Input from "@/components/form/Input";
export default {
  components: {
    Input
  },
  props: {
    title: {
      String,
      default: "Группа"
    },
    active: {
      Boolean,
      default: false
    }
  },
  data() {
    return {
      Active: false
    };
  },
  mounted: function() {
    //this.$refs.group.classList.add("__fadeOut");
    setTimeout(() => {
      this.Active = this.active;
      this.$refs.group.classList.remove("__fadeOut");
    }, 100);
  },
  methods: {
    activeToogle() {
      this.Active = !this.Active;
    },
    groupDelete: function(event) {
      this.$refs.group.classList.add("__deleted");
      setTimeout(() => {
        event.target.parentNode.parentNode.remove();
      }, 300);
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/mixins";
.group {
  height: 30px;
  width: 100%;
  margin-bottom: var(--view-margin) !important;
  transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  &.active {
    height: 310px;
    box-sizing: content-box;
    padding-bottom: var(--view-margin) !important;
    .group {
      &-title {
        margin-bottom: var(--view-gap);
        &:after {
          transform: translateX(-2px) rotate(90deg);
        }
        &-text {
          min-width: calc(100% - var(--view-margin) * 3.3);
          letter-spacing: 0.2em;
          //background-color: #fff;
          /* background-color: transparent;
          padding: 8px 29px 8px 14px;
          border-radius: var(--border-radius);
          margin: -8px -33px -8px -14px;*/
        }
      }
      &-content {
        height: 272px;
      }
    }
    &.__deleted {
      overflow: hidden;
    }
  }
  &.__deleted {
    opacity: 0;
    transform: scale(0.9);
    height: 0px !important;
    z-index: -1;
  }
  &-title {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
    // max-height: 16px;

    &-text {
      @include caption;
      letter-spacing: 0.05em;
      background-color: var(--color-muted);
      color: black;
      padding: 7px 10px;
      border-radius: var(--border-radius);
      pointer-events: none;
      display: inline-block;
      min-width: 30px;
      transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
      font-size: 1rem;
    }

    &-delete {
      position: relative;
      background-image: url("../assets/cross.svg");
      background-size: contain;
      background-position: center center;
      width: 12px;
      opacity: 0.5;
      height: 14px;
      display: inline-block;
      margin-top: 1px;
      margin-left: var(--view-gap);
      pointer-events: all;
      z-index: 999;
      display: none;
    }

    &:after {
      content: "";
      mix-blend-mode: difference;
      position: absolute;
      right: 0;
      background-image: url("../assets/arrow.svg");
      background-repeat: no-repeat;
      background-size: contain;
      width: 15px;
      height: 16px;
      transition: all 0.1s cubic-bezier(0.42, 0, 0.58, 1);
    }
  }

  &-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 0;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  }
}
.__fadeOut {
  height: 0;
  opacity: 0;
}
</style>
