<template>
  <div class="ws-auth">
    <div class="ws-auth__content">
      <div class="container">
        <div class="text-center">
          <router-link :to="{name: 'home'}">
            <img src="static/img/logo.png" alt="Vue" width="90">
          </router-link>
        </div>
        <div class="login-form">
          <h3 class="text-center">
            Login Form
          </h3>
          <form v-on:submit.prevent="login()">
            <p v-show="error">
              <div style="color:red; word-wrap:break-word;">{{ error }}</div>
            </p>
            <div class="form-group">
              <input type="text" v-model="data.body.username" placeholder="Email" class="form-control">
            </div>
            <div class="form-group">
              <input type="password" v-model="data.body.password"  placeholder="Password" class="form-control">
            </div>
            <div class="checkbox">
              <label>
                <input v-model="data.rememberMe" type="checkbox" /> Remember Me
              </label>
            </div>

            <div class="clearfix">
              <button type="submit" class="btn btn-primary pull-right">Login</button>
            </div>

          </form>
        </div>
        <p class="text-center">
          No tengo una cuenta? <router-link :to="{name: 'register'}">Sign up</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        context: 'login context',
        data: {
          body: {
            username: 'admin',
            password: 'secret'
          },
          rememberMe: false
        },
        error: null
      }
    },
    methods: {
      login () {
        this.$auth.login({
          body: this.data.body,
          rememberMe: this.data.rememberMe,
          redirect: {name: 'account'},
          success () {
            this.log('success ' + this.context)
          },
          error (res) {
            this.log('error ' + this.context)
            this.error = res.data
          }
        })
      }
    }
  }
</script>
