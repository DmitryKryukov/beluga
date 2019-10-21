<template lang="pug">
  footer.app-footer  
    AppFooterItem(v-for="footerItem in footerItems", :key="footerItem.id", :footerItem="footerItem")
</template>

<script>
import AppFooterItem from "@/components/layout/AppFooterItem";
let nextFooterItemId = 0;

export default {
  components: {
    AppFooterItem
  },
  data() {
    return {
      footerItems: [
        {
          id: nextFooterItemId++,
          text: "Меню",
          href: "/"
        },
        {
          id: nextFooterItemId++,
          text: "Любимое",
          href: "/favourite"
        },
        {
          id: nextFooterItemId++,
          text: "О нас",
          href: "/about"
        },
        {
          id: nextFooterItemId++,
          text: "Профиль",
          href: "/profile"
        },
        {
          id: nextFooterItemId++,
          text: "Корзина",
          href: "/cart"
        }
      ]
    };
  }
};
</script>
<style scoped  lang="scss">
.app-footer {
  position: fixed;

  top: calc(100vh - 83px);
  bottom: 0;
  width: 100vw;
  padding: 8px 0 30px;
  background-color: var(--plain);
  border-top: var(--border);
  backdrop-filter: var(--backdrop);
  display: flex;
  z-index: 9999;
  & > * {
    flex: 1 100%;
  }
}
</style>