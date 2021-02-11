<template>
<div>
  <div class="barner relative">
    <b-img-lazy v-bind="barner" :src="getImageUrl (80)" alt="barner"></b-img-lazy>
      <div class="icon absolute">
        <b-img v-bind="waku" class="relative shadow-sm" rounded="circle" alt="waku"></b-img>
        <b-img v-bind="waku2" class="absolute waku2" rounded="circle" alt="waku"></b-img>
        <img v-bind="me" class="absolute me" src="../assets/icon.png" alt="me">
      </div>
  </div>
  <p class="font-weight-bold h4">Kota Tsuruno</p>
  <p class="light h6 ">Developer & Graphic Designer & Producer</p>
</div>
</template>

<script>
export default {
  data () {
    return {
      barner: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: '#bbb',
        width: 600,
        height: 100
      },
      waku: {
        blank: true,
        blankColor: '#FFFFFF',
        width: 130,
        height: 130
      },
      waku2: {
        blank: true,
        blankColor: '#000000',
        width: 110,
        height: 110
      },
      me: {
        width: 100,
        height: 100
      }
    }
  },
  methods: {
    getImageUrl (imageId) {
      const {
        width,
        height
      } = this.barner
      return `https://picsum.photos/${width}/${height}/?image=${imageId}`
    }
  }
}
</script>

<style>
.relative {
  position: relative;
}
.absolute{
  position: absolute;
}
.barner {
  margin-bottom: 100px;
}
.barnerpic {
  height:100px;
}
.icon {
  top: 110%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit- transform: translateY(-50%) translateX(-50%);
}
.waku2 {
  top: 10px;
  left: 10px;
}
.me {
  top: 15px;
  left: 15px;
}
.prof {
  position: relative;
  top: 80px;
}
</style>
