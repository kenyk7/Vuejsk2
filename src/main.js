// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

// Router
Vue.router = require('./routes').default

// Vue Auth
Vue.use(require('@websanova/vue-auth'), {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/vue-resource.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  rolesVar: 'role',
  facebookOauth2Data: {
    clientId: 'FbIdApp'
  },
  googleOauth2Data: {
    clientId: 'googleIdApp'
  }
})

// Http
Vue.http.options.root = 'https://api-demo.websanova.com/api/v1'

// Start
var component = require('./App.vue')

component.router = Vue.router

new Vue(component).$mount('#app')
