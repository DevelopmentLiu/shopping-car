import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import { Swipe, SwipeItem, Lazyload, Icon } from 'vant'

Vue.config.productionTip = false

Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
