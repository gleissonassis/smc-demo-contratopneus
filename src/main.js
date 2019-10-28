import Vue from 'vue'
import App from './App.vue'
import VueCurrencyFilter from 'vue-currency-filter'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueCurrencyFilter)

Vue.config.productionTip = false

Vue.use(VueCurrencyFilter,
{
  symbol : 'R$',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true
})

const router = new VueRouter()

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
