import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '../node_modules/bootstrap/scss/bootstrap.scss';


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
