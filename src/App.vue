<template>
<div id="app">
  <myheader />
  <profile2bar />
  <selectbutton />
  <router-view />
  <button class="btn btn-primary">test</button>
</div>
</template>

<script>
import myheader from './components/myheader'
import profile2bar from './components/profile2bar'
import selectbutton from './components/selectbutton'

export default {
  name: 'App',
  components: {
    myheader,
    profile2bar,
    selectbutton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
