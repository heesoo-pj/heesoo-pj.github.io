<template>
  <div class="mainNav">
    <div id="toggle" class="menu-container" @click="toggleNav()">
      <button type="button" class="menu">
        <svg
          class="btn__menu on"
          enable-background="new 0 0 512 512"
          height="512"
          viewBox="0 0 512 512"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"
          />
          <path
            d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"
          />
          <path
            d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z"
          />
        </svg>

        <svg
          class="btn__close"
          height="365.696pt"
          viewBox="0 0 365.696 365.696"
          width="365.696pt"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"
          />
        </svg>
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
      const menuItems = document.querySelector('#overlay')
      const mainWarp = document.querySelector('.mainNav')
      const menuContainer = document.querySelector('.menu-container')
      const IconMenu = document.querySelector('.btn__menu')
      const IconClose = document.querySelector('.btn__close')
      // const menuIcon = document.querySelector('i')

      mainWarp.classList.toggle('on')
      menuItems.classList.toggle('on')
      menuContainer.classList.toggle('on')

      IconMenu.classList.toggle('on')
      IconClose.classList.toggle('on')
      // menuIcon.classList.toggle('fa-bars')
      // menuIcon.classList.add('fa-times')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_hamburger.scss';
</style>
