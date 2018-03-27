import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './App.vue'
import Home from './components/fotozHome.vue'
import About from './components/fotozAbout.vue'

const routes = [
  { path: '/about', component: About},
  {path: '/', component: Home}
]
const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')
