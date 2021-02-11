<template>
  <div>
    <b-form-group
      class="select"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-radio-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        @change="toPath"
        button-variant="outline-primary"
        name="radio-btn-outline"
        buttons
      ></b-form-radio-group>
    </b-form-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: 'test1',
      options: [
        { text: 'artwork',
          value: 'test1'
        },
        { text: 'product',
          value: 'test2'
        }
      ]
    }
  },
  methods: {
    toPath () {
      this.$router.push({name: this.selected})
    }
  }
}
</script>

<style>
.select{
  margin-right: 80%;
}
</style>
