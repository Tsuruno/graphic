<template>
<b-container fluid
             class="bv-example-row">
  <b-row cols="3">
    <!-- <b-col>
      <div class="img_wrap">
        <img class="img_size"
             src="../assets/artwork/namahamu.jpg" />
        <div class="mask">
          <div class="caption">flesh souse</div>
        </div>
      </div>
    </b-col> -->

    <b-col v-for="user in users"
           :key="user.id">
      <div class="img_wrap">
        <img class="img_size"
             src="../assets/artwork/namahamu.jpg" />
        <div class="mask">
          <div class="caption">{{user.name}}{{ user.email }}{{ user.website }}<</div>
        </div>
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
      message: 'Search/Filter In Table',
      users: []
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => this.users = response.data)
    console.log(this)
  }
}
</script>

<style>
b-col {}

.img_size {
  width: 100%;
  height: auto;
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

table {
  border-collapse: collapse;
  width: 100%
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  color: white;
  background-color: #1E90FF;
}
</style>
