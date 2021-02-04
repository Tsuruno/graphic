<template>
<div>
  <div>
    <b-img-lazy v-bind="barner" :src="getImageUrl(80)" alt="barner"></b-img-lazy>

    <b-img v-bind="icon" :img-src="loadImg(logo.png)" alt="icon"></b-img>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      barner: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: '#bbb',
        width: 600,
        height: 100
      },
      icon: {
        center: true,
        width: 100,
        height: 100
      }
    }
  },
  methods: {
    getImageUrl(imageId) {
      const {
        width,
        height
      } = this.barner
      return `https://picsum.photos/${width}/${height}/?image=${imageId}`
    },
    loadImg(filename) {
      return require(`../assets/${filename}`)
    }
  }
}
</script>
