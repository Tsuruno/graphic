<template>
<div>
  <!-- ナビゲーションバー -->
  <b-navbar class="shadow-lg" toggleable type="light" variant="light">
    <b-navbar-brand href="#">GRAPHIC</b-navbar-brand>

    <b-navbar-toggle target="sidebar-1"></b-navbar-toggle>

    <b-sidebar id="sidebar-1" title="Profile" shadow>
      <div class="px-3 py-2">
        <p>
          I'm looking for web development and graphic design requests！
          Please feel free to contact me.<br>
          <a href="https://github.com/Tsuruno">Github</a> <br>
          Twitter: <br>
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>

  </b-navbar>


</div>
</template>
