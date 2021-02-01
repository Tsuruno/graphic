<template>
<div>
  <!-- ナビゲーションバー -->
  <b-navbar toggleable type="light" variant="light">
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

    <b-collapse id="sidebar-1" is-nav>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="text-white px-3" to="/">home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="text-white px-3" to="/test1">test1</router-link>
          </li>
          <li class="nav-item">
            <router-link class="text-white px-3" to="/test2">test2</router-link>
          </li>
          <li class="nav-item">
            <router-link class="text-white px-3" to="/test3">test3</router-link>
          </li>
        </ul>
      </div>
    </b-collapse>

  </b-navbar>


</div>
</template>
