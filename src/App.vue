<template>
  <div class="body-app">

    <div v-if="$auth.ready() && loaded">

      <nav class="navbar navbar-dark bg-inverse navbar-fixed-top">
        <button class="navbar-toggler hidden-md-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>

        <div class="collapse navbar-toggleable-sm" id="navbarResponsive">
          <div class="container-">
            <router-link :to="{name: 'home'}" class="navbar-brand">{ Name App }</router-link>
            <!-- Default links -->
            <ul class="nav navbar-nav">
              
              <li class="nav-item">
                <router-link :to="{name: 'about'}" class="nav-link">About</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name: 'contact'}" class="nav-link">Contact</router-link>
              </li>
              <!-- Show auth Admin-->
              <li class="nav-item" v-show="$auth.check('admin')">
                <router-link :to="{name: 'admin'}" class="nav-link">Admin</router-link>
              </li>
              <li class="nav-item" v-show="$auth.check('admin')">
                <router-link :to="{name: 'users'}" class="nav-link">Users</router-link>
              </li>
            </ul>
            <!-- No auth links -->
            <ul class="nav navbar-nav float-md-right" v-show="!$auth.check()">
              <li class="nav-item ">
                <router-link :to="{name: 'login'}" class="nav-link">Login</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name: 'register'}" class="nav-link">Register</router-link>
              </li>
            </ul>
            <!-- Auth links -->
            <ul class="nav navbar-nav float-md-right" v-show="$auth.check()">
              <li class="nav-item dropdown ">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Profile
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                  <router-link :to="{name: 'account'}" class="dropdown-item">Account</router-link>
                  <a class="dropdown-item" href="#" v-on:click="logout()">Logout</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main style="margin-top: 70px">
        <div class="container">
          <router-view></router-view>
        </div>
      </main>
      <hr>
      <footer style="margin: 15px 0px">
        <div class="container">
          <div class="text-center">
            <hello></hello>
          </div>
          <div class="text-xs-center">
            Websanova <a href="https://github.com/websanova/laravel-api-demo">demo server</a> available on GitHub
          </div>
        </div>
      </footer>
    </div>

    <div v-else>
      <div style="text-align:center; padding-top:50px;">
        Loading site...
      </div>
    </div>

  </div>

</template>

<style lang="sass?outputStyle=expanded">

@import "src/scss/style.scss";

.navbar-brand{
  line-height: 1.25
}

</style>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

import Hello from './components/Hello'

Vue.use(VueRouter)

export default {
  name: 'App',

  components: {
    Hello
  },

  data () {
    return {
      context: 'app context',
      loaded: false
    }
  },

  mounted () {
    var _this = this
    // Set up $auth.ready with other arbitrary loaders (ex: language file).
    setTimeout(function () {
      _this.loaded = true
    }, 500)
  },

  methods: {
    logout () {
      this.$auth.logout({
        makeRequest: true,
        success () {
          console.log('success ' + this.context)
        },
        error () {
          console.log('error ' + this.context)
        }
      })
    },

    logoutOther () {
      this.$auth.logoutOther({
        success () {
          console.log('success ' + this.context)
        },
        error () {
          console.log('error ' + this.context)
        }
      })
    }
  }
}
</script>