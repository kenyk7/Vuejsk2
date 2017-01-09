<template>
  <footer style="margin: 15px 0px">
    <div class="container">
      <div class="text-center">
        <hello></hello>
      </div>
      <hr>
      <div class="text-center">
        Websanova <a href="https://github.com/websanova/laravel-api-demo">demo server</a> available on GitHub
      </div>
    </div>
  </footer>
</template>
<script>
import Hello from './Hello'

export default {
  name: 'Footer',
  components: {
    Hello
  }
}
</script>