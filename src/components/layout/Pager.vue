<template lang="pug">
  .wrapper
    nav.scroller.scroller--nogap(ref = "scroller")
      a.scroller__link(v-for = "tab in tabs", :key = "tab.id", :class = "{'scroller__link--active' : tab.active}" @click = "categoryClick(tab.id)") {{tab.name}}
      .scroller__indicator(ref = "indicator", :style = "'left:' +(pager.indicator.startLeft  + pager.indicator.relScroll * (pager.indicator.goalLeft - pager.indicator.startLeft))+'px; width:' + (pager.indicator.startWidth  + pager.indicator.relScroll * (pager.indicator.goalWidth - pager.indicator.startWidth))+'px;'")

    main.pager(ref = "pager", @scroll = "pagerScroll", v-touch:start = "pagerTouch")
      slot
 </template>

<script>
let indicatorMargin = 0;

export default {
  props: {
    tabs: {
      type: Array
    }
  },
  data() {
    return {
      pager: {
        top: 0,
        innerWidth: 0,
        scrollerLock: true,
        page: {
          width: 0,
          current: 1,
          currentApprox: 1,
          count: 0
        },
        indicator: {
          startLeft: 0,
          currentLeft: 0,
          goalLeft: 0,
          startWidth: 0,
          goalWidth: 0,
          relScroll: 0
        },
        tabLinks: {
          el: [],
          lefts: [],
          widths: []
        }
      }
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    "pager.page.current": function(newVal, oldVal) {
      this.pager.indicator.startLeft = this.pager.tabLinks.lefts[newVal - 1];
      this.pager.indicator.goalLeft = this.pager.tabLinks.lefts[newVal];
      this.pager.indicator.startWidth = this.pager.tabLinks.widths[newVal - 1];
      this.pager.indicator.goalWidth = this.pager.tabLinks.widths[newVal];

      let pagerItems = this.$refs.pager.childNodes; //Выбираем все страницы

      pagerItems.forEach(function(pagerItem) {
        pagerItem.style.marginTop = 0;
      });

      if (window.scrollY > this.pager.top) {
        window.scrollTo(0, this.pager.top);
      }

      let pagerItemCurrent = pagerItems[newVal - 1];
      let pageHeight = pagerItemCurrent.clientHeight;
      this.$refs.pager.style.height = pageHeight + +"px";
      this.$refs.pager.style.overflowY = "hidden";
    },
    "pager.page.currentApprox": function(newVal, oldVal) {
      this.categoryChanged(newVal, oldVal);
    }
  },
  methods: {
    init() {
      //Вызывается onMounted, инициализируем настройки пейджера
      //Добавляет вложенным элментам класс pager__item

      let pages = this.$refs.pager.childNodes;
      pages.forEach(function(page) {
        page.classList.add("pager__item");
      });

      //Инициализируем настройки пейджера
      this.pager.innerWidth = this.$refs.pager.scrollWidth; //Внутренняя область пейджера в пикселях
      this.pager.page.width = window.innerWidth; //Размер окна в пикселях
      this.pager.top = this.$refs.pager.offsetTop - 20; //Верхняя точка пейджера

      this.pager.page.count = pages.length; //Количество страниц в пейджере
      this.pager.page.current = 1; //При инициализации указываем 1 страницу, как текущую. Переключается при полном переходе на страницу (по ceil)
      this.pager.page.currentApprox = 1; //При инициализации указываем 1 страницу, как текущую. Переключается при частичном переходе на страницу (по round)

      //Получаем все объекты в скроллере и сохраняем их ширину и позицию по горизонтали
      let tabLinks = {
        el: this.$refs.scroller.childNodes,
        lefts: [],
        widths: []
      };
      tabLinks.el.forEach(function(tabLink) {
        tabLinks.lefts.push(tabLink.offsetLeft + indicatorMargin); //список содержит x-координату элементов в скроллере
        tabLinks.widths.push(tabLink.offsetWidth - indicatorMargin * 2); //список содержит ширину элементов в скроллере
      });
      this.pager.tabLinks = tabLinks;

      //Инициализируем настройки индикатора
      this.pager.indicator.startLeft = this.pager.tabLinks.lefts[0];
      this.pager.indicator.goalLeft = this.pager.tabLinks.lefts[1];
      this.pager.indicator.startWidth = this.pager.tabLinks.widths[0];
      this.pager.indicator.goalWidth = this.pager.tabLinks.widths[1];

      //Блок ниже должен устанавливать высоту пейджера при инициализации, но пока работает некорректно
      //let pagerItems = this.$refs.pager.childNodes; //Выбираем все страницы
      //let pagerItemCurrent = pagerItems[0];
      //let pageHeight = pagerItemCurrent.clientHeight;
      //this.$refs.pager.style.height = pageHeight + "px"; //todo сделать универсальное изменение высоты пейджера
      //this.$refs.pager.style.overflowY = "hidden";
    },

    handleIndicatorSmooth(pagerScroll) {
      this.pager.indicator.relScroll =
        (pagerScroll / this.pager.innerWidth) * this.pager.page.count +
        1 -
        this.pager.page.current;
    },

    scrollerScroll() {
      if (this.pager.scrollerLock) {
        this.$refs.scroller.scrollLeft =
          this.$refs.indicator.offsetLeft -
          this.pager.page.width / 2 +
          this.$refs.indicator.offsetWidth / 2;
      }
    },

    categoryChanged(newVal, oldVal) {
      this.tabs[oldVal - 1].active = false;
      this.tabs[newVal - 1].active = true;
    },

    categoryClick(pageNumber) {
      this.pager.scrollerLock = false;
      this.$refs.pager.scrollLeft = this.pager.page.width * pageNumber;

      ripple(event, this.$refs.scroller);

      function ripple(e) {
        const rect = {
          top:
            e.target.getBoundingClientRect().top +
            e.target.offsetParent.scrollTop,
          left: e.target.getBoundingClientRect().left
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

    pagerScroll() {
      let pagerScroll = this.$refs.pager.scrollLeft;
      let relPage =
        (pagerScroll / this.pager.innerWidth) * this.pager.page.count + 1;

      this.pager.page.current = Math.floor(relPage);
      this.pager.page.currentApprox = Math.round(relPage);
      this.handleIndicatorSmooth(pagerScroll);

      this.scrollerScroll();
      this.neighbourPageSet();
    },

    pagerTouch() {
      this.pager.scrollerLock = true;
    },

    neighbourPageSet() {
      if (window.scrollY > this.pager.top) {
        let nextPage = this.$refs.pager.childNodes[this.pager.page.current];
        let currentPage = this.$refs.pager.childNodes[
          this.pager.page.current - 1
        ];
        let prevPage = this.$refs.pager.childNodes[this.pager.page.current - 2];

        if (nextPage) {
          nextPage.style.marginTop =
            window.scrollY - this.pager.top + 22 + "px";
        }
        if (prevPage) {
          prevPage.style.marginTop =
            window.scrollY - this.pager.top + 22 + "px";
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";
.pager {
  scroll-snap-type: x mandatory;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  overflow-x: scroll;
  max-width: calc(100vw + var(--view-margin));
  scroll-behavior: smooth;
  align-items: flex-start;
  &__item {
    padding-top: 20px;
    width: 100%;
    min-width: 100vw;
    min-height: calc(100vh - 158px);
    overflow: auto;
    position: sticky;
    top: 0;
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
  &__link {
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