<template>
<div>
  <b-button-group>
      <b-button
        pill
        v-bind="button"
        v-for="(btn, idx) in buttons"
        :key="idx"
        :pressed.sync="btn.state"
        variant="outline-secondary"
      >
        {{ btn.caption }}
      </b-button>
    </b-button-group>
    <p>Pressed States: <strong>{{ btnStates }}</strong></p>
    <router-link to="/test3">test3</router-link>
</div>
</template>

<script>
export default {
  data() {
    return {
      button: {
        width: 100
      },
      buttons: [{
          caption: 'artwork',
          state: true,
          to: "/test1"
        },
        {
          caption: 'Production',
          state: false
        }]
    }
  },
  computed: {
    btnStates() {
      return this.buttons.map(btn => btn.state)
    }
  }
}
</script>
