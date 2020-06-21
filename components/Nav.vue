<template>
  <div class="mainNav">
    <div id="toggle" class="menu-container" @click="toggleNav()">
      <button type="button" class="menu">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>
    </div>

    <div id="overlay" class="overlay">
      <nav class="overlay-menu">
        <ul>
          <li @click="toggleNav()"><nuxt-link to="/">Main</nuxt-link></li>
          <li @click="toggleNav()">
            <nuxt-link to="/introduction">Introduction</nuxt-link>
          </li>
          <li @click="toggleNav()">
            <nuxt-link to="/project">Project</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleNav() {
      console.log('클릭')
      const menuItems = document.querySelector('#overlay')
      const mainWarp = document.querySelector('.mainNav')
      const menuContainer = document.querySelector('.menu-container')
      const menuIcon = document.querySelector('i')

      mainWarp.classList.toggle('on')
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
