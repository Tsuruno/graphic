<template>
<transition name="modal">
  <div class="overlay" @click="$emit('close')">
    <div class="panel" @click.stop>
      <img class="panelimg" :src='`https://raw.githubusercontent.com/Tsuruno/PhotoMaterial/master/img/star.png`' />
    </div>
  </div>
</transition>
</template>

<style>
.panelimg {
  width: 100%;
  height: 100%;
  margin: auto;
}

.overlay {
  background: rgba(0, 0, 0, .8);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
  transition: all 0.5s ease;
}

.panel {
  width: 100%;
  max-width: 100%;
  height: auto;
  background: #fff;
  padding: 20px;
  position: absolute;
  /* left: 50%; */
  top: 50%;
  /* margin-left: -150px; */
  margin-top: -100px;
  transition: all 0.3s ease;
}

.modal-enter,
.modal-leave-active {
  opacity: 0;
}

.modal-enter .panel,
.modal-leave-active .panel {
  top: -200px;
}
</style>
