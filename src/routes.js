import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var auth = [
  {
    path: '/login',
    name: 'login',
    component: require('./views/auth/Login.vue'),
    meta: {auth: false}
  },
  {
    path: '/register',
    name: 'register',
    component: require('./views/auth/Register.vue'),
    meta: {auth: false}
  }
]

var pages = [
  {
    path: '/',
    name: 'home',
    component: require('./views/Home.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: require('./views/Contact.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: require('./views/About.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: require('./views/Account.vue'),
    meta: {auth: true}
  },
  {
    path: '/users',
    name: 'users',
    component: require('./views/Users.vue')
  }
]

var admin = [
  {
    path: '/admin',
    name: 'admin',
    component: require('./views/Admin.vue'),
    meta: {auth: 'admin'},
    children: [{
      path: 'products',
      name: 'admin-products',
      component: require('./views/admin/Products.vue'),
      children: [{
        path: ':product_id',
        name: 'admin-product',
        component: require('./views/admin/Product.vue'),
        children: [{
          path: 'info',
          name: 'admin-product-info',
          component: require('./views/admin/ProductInfo.vue'),
          meta: {auth: undefined}
        }, {
          path: 'media',
          name: 'admin-product-media',
          component: require('./views/admin/ProductMedia.vue')
        }]
      }]
    }]
  }
]

var errors = [
  {
    path: '/404',
    name: 'error-404',
    component: require('./views/errors/404.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

var routes = pages.concat(auth, admin, errors)

// Router
export default new VueRouter({
  hashbang: true,
  linkActiveClass: 'active',
  mode: 'history',
  base: __dirname,
  routes: routes
})
