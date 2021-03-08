<template>
<div class='main'>
  <b-form-group class="select"
                v-slot="{ ariaDescribedby }">
    <b-form-radio-group v-model="selected"
                        :options="options"
                        :aria-describedby="ariaDescribedby"
                        @change="toPath"
                        button-variant="outline-primary"
                        name="radio-btn-outline"
                        buttons></b-form-radio-group>
  </b-form-group>
  <b-button class='message'>
    <font-awesome-icon icon="envelope" />
    Message
  </b-button>
  <div class='clear' />
</div>
</template>

<script>
export default {
  data() {
    return {
      selected: 'artwork',
      options: [{
          text: 'info',
          value: 'info'
        },
        {
          text: 'artwork',
          value: 'artwork'
        },
        {
          text: 'product',
          value: 'test2'
        }
      ]
    }
  },
  methods: {
    toPath() {
      this.$router.push({
        name: this.selected
      })
    }
  }
}
</script>

<style>
.main {
  padding: 10px;
  margin: 0px 10px 0px 10px;
}

.select {
  float: left;
}

.message {
  float: right;
}

.clear {
  clear: right;
  clear: left;
}
</style>
