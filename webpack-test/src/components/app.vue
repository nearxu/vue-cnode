<template>
  <div id="app">
    <img src="../images/logo.svg" alt="logo" />
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'hello world'
    }
  }
}
</script>
<style lang="scss">
p {
  background: blue;
  line-height: 40px;
}
</style>

