<template>
<div id="app">
  <myheader />
  <profile2bar />
  <selectbutton />
  <router-view />
  <button @click="showModal = true">モーダル表示</button>
  <modal v-if="showModal"
         @close="showModal = false"></modal>
</div>
</template>

<script>
import myheader from './components/myheader'
import profile2bar from './components/profile2bar'
import selectbutton from './components/selectbutton'
import Modal from './components/Modal'

export default {
  name: 'App',
  data() {
    return {
      showModal: false
    }
  },
  components: {
    myheader,
    profile2bar,
    selectbutton,
    Modal
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
