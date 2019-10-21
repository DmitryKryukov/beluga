import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Dish from "@/components/Dish";
import Favourite from "@/components/Favourite";
import About from "@/components/About";
import Profile from "@/components/Profile";
import Cart from "@/components/Cart";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/dish/:id",
      name: "Dish",
      component: Dish
    },
    {
      path: "/favourite",
      name: "Favourite",
      component: Favourite
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    }
  ]
});
