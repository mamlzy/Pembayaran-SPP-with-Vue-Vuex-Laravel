import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueGoodTablePlugin from 'vue-good-table';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'vue-good-table/dist/vue-good-table.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueGoodTablePlugin)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
