<template>
<b-container fluid
             class="bv-example-row">
  <b-row cols="3">
    <b-col v-for="obj in objects"
           :key="obj.id">
      <div class="img_wrap">
        <a href="#">
        <img class="img_size"
             :src='`https://raw.githubusercontent.com/Tsuruno/PhotoMaterial/master/resizeImg/${obj.dir}`'
             :alt="obj.name"/>
        <div class="mask">
          <div class="caption">{{obj.name}}</div>
        </div>
      </a>
      </div>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      objects: []
    }
  },
  mounted() {
    axios.get('https://raw.githubusercontent.com/Tsuruno/PhotoMaterial/master/data.json')
      .then(response => this.objects = response.data)
    console.log(this)
  }
}
</script>

<style>
.img_size {
  width: 100%;
  height: 300px;
  margin: auto;
  object-fit: cover;
}

.img_wrap {
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  /* 相対位置指定 */
}

.img_wrap .caption {
  font-size: 130%;
  text-align: center;
  padding-top: 80px;
  color: #fff;
}

.mask {
  width: 100%;
  height: 100%;
  position: absolute;
  /* 絶対位置指定 */
  top: 0;
  left: 0;
  opacity: 0;
  /* マスクを表示しない */
  background-color: rgba(0, 0, 0, 0.4);
  /* マスクは半透明 */
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.img_wrap:hover .mask {
  opacity: 1;
  /* マスクを表示する */
}
</style>
