import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store/index";

import { Loading } from 'element-ui';

import { Button, Swipe, SwipeItem, NavBar, Icon,PullRefresh   } from "vant";
import "vant/lib/index.css";

Vue.use(Button)
  .use(Swipe)
  .use(SwipeItem)
  .use(NavBar)
  .use(Icon)
  .use(Loading)
  .use(PullRefresh);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
