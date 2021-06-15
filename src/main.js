import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import markdown from '@/directives/markdown';

Vue.config.productionTip = false;
Vue.directive('markdown', markdown);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
