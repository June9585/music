import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/MusicPages",
      name: "MusicPages",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/components/MusicPages")
    },
    {
      path: "/Music",
      name: "Music",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/Music/index.vue")
    }
  ]
});
