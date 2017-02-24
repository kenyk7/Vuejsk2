// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import app env config
import env from './../app.env'
import Vue from 'vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

// Mixin functions globals
import mixins from './helpers/mixins.js'
// Inject mixins functions to vue
Vue.mixin(mixins)

// jQuery
import $ from 'jquery'
window.$ = $

// Use bootstrap js
import 'bootstrap-sass/assets/javascripts/bootstrap.js'

// Http config
Vue.http.options.root = env.apiUrl
Vue.http.headers.common['Accept'] = 'application/vnd.interbank_cupones.v1+json'
Vue.http.options.emulateJSON = true

// Router
Vue.router = require('./routes').default

// Vue Auth
Vue.use(require('@websanova/vue-auth'), {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/vue-resource.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  rolesVar: 'role',
  refreshData: {
    enabled: false
  },
  facebookOauth2Data: {
    clientId: 'FbIdApp'
  },
  googleOauth2Data: {
    clientId: 'googleIdApp'
  }
})

// Start
var component = require('./App.vue')

component.router = Vue.router

new Vue(component).$mount('#app')
