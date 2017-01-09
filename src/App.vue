<template>
  <div class="body-app">
    <div v-if="$auth.ready() && loaded">
      <div v-if="verifyPageAuth">
        <router-view></router-view>
      </div>
      <div v-else>
        <co-header></co-header>
        <main style="margin-top: 90px">
          <div class="container">
            <router-view></router-view>
          </div>
        </main>
        <hr>
        <co-footer></co-footer>
      </div>
    </div>
    <div v-else>
      <loader :static="false"></loader>
    </div>
  </div>
</template>

<script>
import Loader from './components/Loader'
import coHeader from './components/Header'
import coFooter from './components/Footer'

export default {
  name: 'App',

  components: {
    Loader,
    coHeader,
    coFooter
  },

  data () {
    return {
      context: 'app context',
      pageAuth: false,
      loaded: false
    }
  },

  mounted () {
    var _self = this
    // Set up $auth.ready with other arbitrary loaders (ex: language file).
    setTimeout(function () {
      _self.loaded = true
    }, 500)
  },

  computed: {
    verifyPageAuth: function () {
      return this.$route.name === 'login' || this.$route.name === 'register' || this.$route.name === 'oauth'
    }
  }
}
</script>