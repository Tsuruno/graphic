<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="img_wrap">
          <img
            src="https://cotodama.co/wp-content/uploads/2018/09/css_mouseover_img03.png"
          />
          <div class="mask">
            <div class="caption">flesh souse</div>
          </div>
        </div>
      </div>
      <div class="col-md-4">2</div>
      <div class="col-md-4">3</div>
      <div class="col-md-4">4</div>
      <div class="col-md-4">5</div>
      <div class="col-md-4">6</div>
      <div class="col-md-4">7</div>
      <div class="col-md-4">8</div>
      <div class="col-md-4">9</div>
      <div class="col-md-4">10</div>
      <div class="col-md-4">11</div>
      <div class="col-md-4">12</div>
      <div class="col-md-4">13</div>
    </div>
  </div>
</template>

<script></script>

<style>
.img_wrap {
  width: 280px;
  height: 188px;
  overflow: hidden;
  margin: 10px 8px 10px 16px;
  position: relative; /* 相対位置指定 */
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
  position: absolute; /* 絶対位置指定 */
  top: 0;
  left: 0;
  opacity: 0; /* マスクを表示しない */
  background-color: rgba(0, 0, 0, 0.4); /* マスクは半透明 */
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.mask {
  width: 100%;
  height: 100%;
  position: absolute; /* 絶対位置指定 */
  top: 50px;
  left: 0;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.img_wrap:hover .mask {
  opacity: 1; /* マスクを表示する */
}
</style>
