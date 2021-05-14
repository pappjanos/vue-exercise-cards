import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

// Components
const register = (Vue) => (path) => {
  const name = (path) => path.split('/')[path.split('/').length - 1]
  const component = (path) => require('@/components/' + path + '.vue').default
  Vue.component(name(path), component(path))
}

const components = ['product-card', 'joke-of-the-day']
components.forEach(register(Vue))

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
