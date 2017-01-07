<template>
  <div class="body-app">

    <div v-if="$auth.ready() && loaded">
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link :to="{name: 'home'}" class="navbar-brand">{ Name App }</router-link>
          </div>
      
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav">
              <li>
                <router-link :to="{name: 'about'}">About</router-link>
              </li>
              <li>
                <router-link :to="{name: 'contact'}">Contact</router-link>
              </li>
              <li v-show="$auth.check('admin')">
                <router-link :to="{name: 'admin'}">Admin</router-link>
              </li>
              <li v-show="$auth.check('admin')">
                <router-link :to="{name: 'users'}">Users</router-link>
              </li>
            </ul>

            <ul class="nav navbar-nav navbar-right" v-if="!$auth.check()">
              <li>
                <router-link :to="{name: 'login'}">Login</router-link>
              </li>
              <li>
                <router-link :to="{name: 'oauth'}">OAuth 2</router-link>
              </li>
              <li>
                <router-link :to="{name: 'register'}">Register</router-link>
              </li>
            </ul>

            <ul class="nav navbar-nav navbar-right" v-else>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">{{ $auth.user().username }} <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link :to="{name: 'account'}" class="dropdown-item">Account</router-link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" v-on:click="logout()">Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div>
      </nav>

      <main style="margin-top: 90px">
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

<style lang="scss">
// @import "src/scss/style.scss";

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