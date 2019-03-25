import Vue from 'vue'
import App from './App.vue'
import Ninjas from './Ninjas.vue'
import VueResources from 'vue-resource'

Vue.use[VueResources];
Vue.component('ninjas', Ninjas);

new Vue({
  el: '#app',
  render: h => h(App)
})
