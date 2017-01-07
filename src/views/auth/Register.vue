<template>
  <div class="ws-register">
    <div class="container">
      <div class="container-content">
        <div class="text-center">
          <img src="static/img/logo.png" alt="Login" width="90">
        </div>
        <div class="login-form">
          <h3 class="text-center">
            Register
          </h3>
          <form  v-on:submit.prevent="register()">
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
                <input v-model="data.autoLogin" type="checkbox" /> Auto Login
              </label>
            </div>
            <div class="checkbox">
              <label>
                <input v-model="data.rememberMe" type="checkbox" /> Remember Me
              </label>
            </div>

            <div class="clearfix">
              <button type="submit" class="btn btn-primary btn-lg- float-xs-right">Register</button>
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
      context: 'register context',
      data: {
        body: {
          username: '',
          password: ''
        },
        autoLogin: false,
        rememberMe: false
      },

      error: null
    }
  },

  mounted () {
    console.log('ready')
  },

  methods: {
    register () {
      this.$auth.register({
        body: this.data.body,
        autoLogin: this.data.autoLogin,
        rememberMe: this.data.rememberMe,
        success: function () {
          console.log('success ' + this.context)
        },
        error: function (res) {
          console.log('error ' + this.context)
          this.error = res.data
        }
      })
    }
  }
}
</script>