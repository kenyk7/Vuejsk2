<template>
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
</template>
<script>
import $ from 'jquery'

export default {
  name: 'header',
  data () {
    return {
      context: 'app context'
    }
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
  },
  watch: {
    '$route' () {
      $('.navbar-collapse').collapse('hide')
    }
  }
}
</script>