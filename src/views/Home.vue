<template>
  <div>
    <div class="page-head">
      <h1>{{ msg }} {{ token }}</h1>
      <p>
        <button type="button" class="btn btn-default">button</button>
        <button type="button" class="btn btn-primary">button</button>
        <button type="button" class="btn btn-success">button</button>
        <button type="button" class="btn btn-info">button</button>
        <button type="button" class="btn btn-danger">button</button>
        <button type="button" class="btn btn-warning">button</button>
      </p>
    </div>
    <hr>
    <h3>Test Redirects</h3>
    <ul>
      <li><router-link :to="{name: 'account'}">Test account access</router-link></li>
      <li><router-link :to="{name: 'admin'}">Test admin access</router-link></li>
      <li><router-link :to="{name: 'admin-products'}">Test admin products access</router-link></li>
      <li><router-link :to="{name: 'admin-product-info', params: {product_id: 1}}">Test admin product 1 info access (should work)</router-link></li>
      <li><router-link :to="{name: 'login'}">Test login page access</router-link></li>
    </ul>

    <hr>

    <h3>Test Tokens</h3>

    <div style="word-wrap:break-word;">{{ token === '' ? 'select token' : (token ? token : 'no token set') }}</div>

    <ul>
      <li><a v-on:click="setToken()" href="javascript:void(0);">Test default token</a></li>
      <li><a v-on:click="setToken('other')" href="javascript:void(0);">Test other token</a></li>
      <li><a v-on:click="setToken('default')" href="javascript:void(0);">Test admin token</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      token: '',
      msg: 'Welcome to Home page'
    }
  },
  methods: {
    setToken (name) {
      this.token = this.$auth.token(name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
