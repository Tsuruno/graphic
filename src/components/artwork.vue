<template>
  <div class="img_wrap">
<img src="https://cotodama.co/wp-content/uploads/2018/09/css_mouseover_img03.png">
</div>

</div>

</template>

<style>
.img_wrap{
  border: 1px solid #ddd;
  width: 300px;
  height: 226px;
  margin: 0 auto;
  overflow: hidden;
  background: #000;
}
.img_wrap img{
  width: 100%;
  cursor: pointer;
  transition-duration: 0.3s;
}
.img_wrap:hover img{
  opacity: 0.6;
  transition-duration: 0.3s;
}

</style>
