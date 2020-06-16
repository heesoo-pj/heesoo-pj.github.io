<template>
  <nav>
    <div class="global-menu">
      <div class=" global-menu__wrap">
        <nuxt-link
          class="global-menu__item global-menu__item--demo-2"
          to="/donginbi"
          >동인비</nuxt-link
        >
        <!-- <a class="global-menu__item global-menu__item--demo-2" href="/donginbi"
          >Reviews</a
        >
        <a class="global-menu__item global-menu__item--demo-2" href="#"
          >Diving Suits</a
        >
        <a class="global-menu__item global-menu__item--demo-2" href="#"
          >Swimwear</a
        >
        <a class="global-menu__item global-menu__item--demo-2" href="#"
          >Reviews</a
        > -->
      </div>
    </div>
    <svg
      class="shape-overlays"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path class="shape-overlays__path"></path>
      <path class="shape-overlays__path"></path>
      <path class="shape-overlays__path"></path>
      <path class="shape-overlays__path"></path>
    </svg>
  </nav>
</template>
<script>
export default {
  methods: {
    goPage(url) {
      // const elmOverlay = document.querySelector('.shape-overlays')
      this.navOff()
      // elmOverlay.addEventListener(
      //   'transitionend',
      //   () => (window.location = url)
      // )
      setTimeout(() => {
        window.location = url
      }, 5000)
      return false
    },
    navOff() {
      const elmHamburger = document.querySelector('.hamburger')
      const gNavItems = document.querySelectorAll('.global-menu__item')
      const elmOverlay = document.querySelector('.shape-overlays')

      elmHamburger.classList.remove('is-opened-navi')
      elmOverlay.classList.remove('is-opened')
      for (let i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.remove('is-opened')
      }
    }
  }
}
</script>
