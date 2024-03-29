import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router/index';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './styles/index.scss';


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
