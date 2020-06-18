<template>
  <div class="mainNav">
    <!-- hamburger -->
    <!-- <div class="hamburger">
      <span class="hamburger__line"></span>
      <span class="hamburger__line"></span>
      <span class="hamburger__line"></span>
    </div>
    <div class="global-menu">
      <div class=" global-menu__wrap">
        <nuxt-link to="/donginbi">동인비</nuxt-link>
      </div>
    </div> -->

    <div id="toggle" class="menu-container">
      <!-- <a href="#" class="menu" @click="toggleNav()"
          ><i class="fa fa-bars" aria-hidden="true"></i
        ></a> -->
      <button type="button" class="menu" @click="toggleNav()">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>
    </div>

    <div id="overlay" class="overlay">
      <nav class="overlay-menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Tour</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleNav() {
      const menuItems = document.querySelector('#overlay')
      const menuContainer = document.querySelector('.menu-container')
      const menuIcon = document.querySelector('i')

      menuItems.classList.toggle('on')
      menuContainer.classList.toggle('on')
      menuIcon.classList.toggle('fa-bars')
      menuIcon.classList.add('fa-times')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_hamburger.scss';
</style>
