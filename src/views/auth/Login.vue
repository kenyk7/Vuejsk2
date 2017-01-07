<template>
  <div class="ws-login">
    <div class="container">
      <div class="container-content">
        <div class="text-center">
          <img src="static/img/logo.png" alt="Login" width="90">
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
              <button type="submit" class="btn btn-primary btn-lg- float-xs-right">Connexion</button>
            </div>
            
          </form>
        </div>
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
            console.log('success ' + this.context)
          },
          error (res) {
            console.log('error ' + this.context)
            this.error = res.data
          }
        })
      }
    }
  }
</script>