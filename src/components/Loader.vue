<template>
  <div class="loader" :class="{ static: static}">
    <div class="loader__circle"></div>
  </div>
</template>

<script>
export default {
  name: 'loader',
  props: {
    'static': Boolean
  }
}
</script>

<style lang="sass?outputStyle=expanded">

$loader-width: 50px;
$loader-bulk: 2px;
$loader-bg: rgba(#fff, 0.9);
$loader-color: blue;

.loader {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: $loader-bg;
  &.static{
    height: $loader-width * 2;
    position: relative;
    background-color: transparent;
  }
  &__circle{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -$loader-width / 2 ;
    margin-left: -$loader-width / 2 ;
    border: $loader-bulk solid rgba($loader-color, 0.1);
    border-left: $loader-bulk solid rgba($loader-color, 0.7);
    
    animation: loading 0.7s infinite linear;
  }
  &__circle,
  &__circle:after {
    border-radius: 50%;
    width: $loader-width;
    height: $loader-width;
  }
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
