import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGoodTablePlugin from 'vue-good-table';
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import the styles
import 'vue-good-table/dist/vue-good-table.css'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueGoodTablePlugin)
Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
