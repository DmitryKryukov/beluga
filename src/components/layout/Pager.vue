<template lang="pug">
  .wrapper
    nav.scroller.scroller--nogap(ref = "scroller", v-if = "tabs")
      a.scroller__tab(v-for = "tab in tabs", :class = "{'scroller__tab--active' : tab.active}", @click = "tabClick(tab.id)") {{tab.name}}
      .scroller__indicator(ref = "indicator", :style = "'left:' + (scroller.indicator.startLeft  + scroller.indicator.relScroll * (scroller.indicator.goalLeft - scroller.indicator.startLeft))+'px; width:' + (scroller.indicator.startWidth  + scroller.indicator.relScroll * (scroller.indicator.goalWidth - scroller.indicator.startWidth))+'px;'")
    
    .pager(ref = "pager", @scroll = "pagerScroll", v-touch:start = "pagerTouch")
      slot
 </template>

<script>
const footerHeight = 85;

export default {
  props: {
    tabs: {
      type: Array
    }
  },
  data() {
    return {
      pager: {
        el: {},
        top: 0,
        innerWidth: 0,
        pages: {
          els: {},
          width: 0,
          current: 0,
          currentApprox: 0,
          count: 0
        }
      },
      scroller: {
        el: {},
        height: 0,
        top: 0,
        lock: true,
        tabLinks: {
          els: [],
          lefts: [],
          widths: []
        },
        indicator: {
          el: {},
          startLeft: 0,
          currentLeft: 0,
          goalLeft: 0,
          startWidth: 0,
          goalWidth: 0,
          relScroll: 0
        }
      }
    };
  },
  mounted() {
    this.init();
    this.getNextIndicatorProps(0);
    this.categoryChanged(1);
  },
  methods: {
    init() {
      //Инициализируем скроллер
      this.scroller.el = this.$refs.scroller;
      this.scroller.height = this.scroller.el.offsetHeight;
      this.scroller.top = this.scroller.el.offsetTop;
      this.scroller.tabLinks.els = this.scroller.el.childNodes;
      this.scroller.tabLinks.els.forEach(function(tabLink) {
        this.scroller.tabLinks.lefts.push(tabLink.offsetLeft);
        this.scroller.tabLinks.widths.push(tabLink.offsetWidth);
      }, this);
      this.scroller.indicator.el = this.$refs.indicator;

      //Инициализируем пейджер
      this.pager.el = this.$refs.pager;
      this.pager.pages.els = this.pager.el.childNodes;
      this.pager.pages.els.forEach(function(page) {
        page.classList.add("pager__item");
        page.style.minHeight =
          window.innerHeight - footerHeight - this.scroller.height + "px";
      }, this);
      this.pager.innerWidth = this.pager.el.scrollWidth;
      this.pager.top = this.pager.el.offsetTop;
      this.pager.pages.width = window.innerWidth;
      this.pager.pages.count = this.pager.pages.els.length;
      this.pager.pages.current = 1;
      this.pager.pages.currentApprox = 1;
    },

    getNextIndicatorProps(num) {
      this.scroller.indicator.startLeft = this.scroller.tabLinks.lefts[num];
      this.scroller.indicator.goalLeft = this.scroller.tabLinks.lefts[num + 1];
      this.scroller.indicator.startWidth = this.scroller.tabLinks.widths[num];
      this.scroller.indicator.goalWidth = this.scroller.tabLinks.widths[
        num + 1
      ];
    },

    changePageHeight(num = 0) {
      this.pager.el.style.maxHeight =
        this.pager.pages.els[num].offsetHeight + "px";
      this.pager.el.style.overflowY = "hidden";
      this.resetPageMargin();
    },

    resetPageMargin() {
      this.pager.pages.els.forEach(function(page) {
        page.style.marginTop = 0;
      });
      if (window.scrollY > this.pager.top - 48) {
        window.scrollTo(window.X, this.pager.top - 48);
      }
    },

    handleIndicatorSmooth(pagerScrollPosition) {
      this.scroller.indicator.relScroll =
        (pagerScrollPosition / this.pager.innerWidth) * this.pager.pages.count +
        1 -
        this.pager.pages.current;
    },

    scrollerScroll() {
      if (this.scroller.lock) {
        this.scroller.el.scrollLeft =
          this.scroller.indicator.el.offsetLeft -
          this.pager.pages.width / 2 +
          this.scroller.indicator.el.offsetWidth / 2;
      }
    },

    categoryChanged(newVal, oldVal) {
      if (oldVal) {
        this.tabs[oldVal - 1].active = false;
      } else {
        this.tabs.forEach(tab => {
          tab.active = false;
        });
      }
      this.tabs[newVal - 1].active = true;
    },

    tabClick(pageNum) {
      this.scroller.lock = false;
      this.pager.el.scrollLeft = this.pager.pages.width * pageNum;

      ripple(event);

      function ripple(e) {
        const rect = {
          top:
            e.target.getBoundingClientRect().top +
            e.target.offsetParent.scrollTop,
          left: e.target.getBoundingClientRect().left
        };
        let clickPosition = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };

        let ripple = document.createElement("div");
        ripple.className = "rippler";
        ripple.style.left = clickPosition.x - 5 + "px";
        ripple.style.top = clickPosition.y - 5 + "px";
        e.target.appendChild(ripple);

        ripple.addEventListener("animationend", function() {
          ripple.remove();
        });
      }
    },

    pagerScroll() {
      let pagerScrollPosition = this.pager.el.scrollLeft;
      let relPage =
        (pagerScrollPosition / this.pager.innerWidth) * this.pager.pages.count +
        1;

      this.pager.pages.current = Math.floor(relPage);
      this.pager.pages.currentApprox = Math.round(relPage);
      console.log(this.pager.el.scrollLeft);
      this.pager.el.style.maxHeight = "none";
      this.pager.el.style.overflowY = "visible";
      if (this.pager.el.scrollLeft < 0.1) {
        this.changePageHeight(0);
      }

      this.handleIndicatorSmooth(pagerScrollPosition);
      this.scrollerScroll();
      this.neighbourPageSet();
    },

    pagerTouch() {
      this.scroller.lock = true;
    },

    neighbourPageSet() {
      if (window.scrollY > this.scroller.top) {
        let nextPage = this.pager.pages.els[this.pager.pages.current];
        let prevPage = this.pager.pages.els[this.pager.pages.current - 2];
        //todo если скроллим вправо, то менять nextPage, если влево — prevPage
        if (nextPage) {
          nextPage.style.marginTop =
            window.pageYOffset - this.pager.top + this.scroller.height + "px";
        }
        if (prevPage) {
          prevPage.style.marginTop =
            window.pageYOffset - this.pager.top + 48 + "px";
        }
      }
    }
  },
  watch: {
    "pager.pages.current": function(newVal, oldVal) {
      this.getNextIndicatorProps(newVal - 1);
      this.changePageHeight(newVal - 1);
    },
    "pager.pages.currentApprox": function(newVal, oldVal) {
      this.categoryChanged(newVal, oldVal);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";
.pager {
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  overflow-x: scroll;
  overflow-y: hidden;
  max-width: calc(100vw + var(--view-margin));
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  align-items: flex-start;
  &__item {
    width: 100%;
    min-width: 100vw;
    scroll-snap-align: start;
  }
}
.scroller {
  @include sticky;
  &__indicator {
    width: 65px;
    height: 3px;
    position: absolute;
    background-color: var(--primary);
    bottom: -1px;
    border-radius: 3px;
    will-change: left, width;
    transition: width 0.01s linear, left 0.01s linear;
  }
  &__tab {
    @include muted;
    position: relative;
    overflow: hidden;
    display: block;
    flex: 0 0 auto;
    font-size: 17px;
    line-height: 20px;
    font-feature-settings: "case" on;
    padding: 13px 15px 13px;
    &--active {
      color: var(--color);
    }
  }
}
</style>