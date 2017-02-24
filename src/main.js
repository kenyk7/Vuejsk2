// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import app env config
import env from './../app.env'
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAuth from '@websanova/vue-auth'
Vue.use(VueAxios, axios)

// Mixin functions globals
import mixins from './helpers/mixins.js'
// Inject mixins functions to vue
Vue.mixin(mixins)

// jQuery
import $ from 'jquery'
window.$ = $

// Use bootstrap js
import 'bootstrap-sass/assets/javascripts/bootstrap.js'

// Router
Vue.router = require('./routes').default

// Vue Auth
Vue.use(VueAuth, {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
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

// Http config
axios.defaults.baseURL = env.apiUrl
axios.defaults.headers.common['Accept'] = 'application/vnd.api_app.v1+json'

// Start
var component = require('./App.vue')

component.router = Vue.router

new Vue(component).$mount('#app')
