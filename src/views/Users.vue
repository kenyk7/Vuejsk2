<template>
  <div >
    <h1>Users</h1>

    <hr/>

    <div v-if="!loading">
      <transition>
        <ul>
          <li v-for="user in users">
            {{ user.username }} {{ user.id }}
            <span class="tag tag-default tag-pill float-xs-right">{{ user.role }}</span>
          </li>
        </ul>
      </transition>
    </div>

    <div v-else>
      <loader></loader>
    </div>

  </div>
</template>

<script>
import Loader from './../components/Loader'

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
