<template>
  <div >
    <h1 class="js-title-users">Users</h1>

    <hr>

    <div v-if="!loading">
      <ul>
        <li v-for="user in users">
          {{ user.username }} {{ user.id }}
          <span class="tag tag-default tag-pill float-xs-right">{{ user.role }}</span>
        </li>
      </ul>
    </div>

    <div v-show="loading">
      <loader :static="true"></loader>
    </div>

  </div>
</template>

<script>
import Loader from './../components/Loader'
import $ from 'jquery'

export default {
  name: 'users',

  components: {
    Loader
  },

  data () {
    return {
      context: 'users context',
      loading: true,
      users: null
    }
  },

  mounted () {
    this.getUsers()
    $('.js-title-users').addClass('h2')
  },

  methods: {
    getUsers () {
      this.$http({
        url: 'users',
        method: 'GET'
      })
      .then((res) => {
        this.loading = false
        this.users = res.data.data.items
        console.log('success ' + this.context)
      }, (res) => {
        console.log('error ' + this.context)
      })
    },

    loginOther (user) {
      this.$auth.loginOther({
        params: {
          id: user.id
        },
        success () {
          console.log('success ' + this.context)
        },
        error () {
          console.log('error ' + this.context)
        },
        redirect: '/account'
      })
    }
  }
}
</script>
