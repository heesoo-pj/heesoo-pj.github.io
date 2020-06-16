<template>
  <div class="wrap">
    <section class="kv">
      <!-- hamburger -->
      <div class="hamburger js-hover" @click="openHamburger()">
        <div class="hamburger__line hamburger__line--01">
          <div class="hamburger__line-in hamburger__line-in--01"></div>
        </div>
        <div class="hamburger__line hamburger__line--02">
          <div class="hamburger__line-in hamburger__line-in--02"></div>
        </div>
        <div class="hamburger__line hamburger__line--03">
          <div class="hamburger__line-in hamburger__line-in--03"></div>
        </div>
        <div class="hamburger__line hamburger__line--cross01">
          <div class="hamburger__line-in hamburger__line-in--cross01"></div>
        </div>
        <div class="hamburger__line hamburger__line--cross02">
          <div class="hamburger__line-in hamburger__line-in--cross02"></div>
        </div>
      </div>
      <Logo id="logo" />
      <Nav />
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Nav from '~/components/Nav.vue'
class ShapeOverlays {
  constructor(elm) {
    this.elm = elm
    this.path = elm.querySelectorAll('path')
    this.numPoints = 4
    this.duration = 800
    this.delayPointsArray = []
    this.delayPointsMax = 180
    this.delayPerPath = 70
    this.timeStart = Date.now()
    this.isOpened = false
    this.isAnimating = false
  }

  toggle() {
    this.isAnimating = true
    const range = Math.random() * Math.PI * 2
    for (let i = 0; i < this.numPoints; i++) {
      const radian = (i / (this.numPoints - 1)) * Math.PI * 2
      this.delayPointsArray[i] =
        ((Math.sin(radian + range) + 1) / 2) * this.delayPointsMax
    }
    if (this.isOpened === false) {
      this.open()
    } else {
      this.close()
    }
  }

  open() {
    this.isOpened = true
    this.elm.classList.add('is-opened')
    this.timeStart = Date.now()
    this.renderLoop()
  }

  close() {
    this.isOpened = false
    this.elm.classList.remove('is-opened')
    this.timeStart = Date.now()
    this.renderLoop()
  }

  updatePath(time) {
    const points = []
    for (let i = 0; i < this.numPoints; i++) {
      points[i] =
        Math.min(
          Math.max(time - this.delayPointsArray[i], 0) / this.duration,
          1
        ) * 100
    }

    let str = ''
    str += this.isOpened ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `
    for (let i = 0; i < this.numPoints - 1; i++) {
      const p = ((i + 1) / (this.numPoints - 1)) * 100
      const cp = p - ((1 / (this.numPoints - 1)) * 100) / 2
      str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${
        points[i + 1]
      } `
    }
    str += this.isOpened ? `V 0 H 0` : `V 100 H 0`
    return str
  }

  render() {
    if (this.isOpened) {
      for (let i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute(
          'd',
          this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i))
        )
      }
    } else {
      for (let i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute(
          'd',
          this.updatePath(
            Date.now() -
              (this.timeStart + this.delayPerPath * (this.path.length - i - 1))
          )
        )
      }
    }
  }

  renderLoop() {
    this.render()
    if (
      Date.now() - this.timeStart <
      this.duration +
        this.delayPerPath * (this.path.length - 1) +
        this.delayPointsMax
    ) {
      requestAnimationFrame(() => {
        this.renderLoop()
      })
    } else {
      this.isAnimating = false
    }
  }
}

export default {
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  components: {
    Logo,
    Nav
  },
  data() {
    return {
      navigate: null
    }
  },
  created() {},
  mounted() {
    if (process.browser) {
      window.onNuxtReady((app) => {
        this.init()
      })
    }
  },
  methods: {
    init() {
      setTimeout(() => document.body.classList.add('render', 'demo-2'), 60)
      document.body.classList.remove('render')
      // document.body.addEventListener(
      //   'transitionend',
      //   () => (window.location = linkEl.href)
      // )
    },
    openHamburger() {
      const elmHamburger = document.querySelector('.hamburger')
      const gNavItems = document.querySelectorAll('.global-menu__item')
      const elmOverlay = document.querySelector('.shape-overlays')
      const openBoolen = elmHamburger.classList.contains('is-opened-navi')
      const overlay = new ShapeOverlays(elmOverlay)
      if (overlay.isAnimating) {
        return false
      }
      overlay.toggle()

      if (!openBoolen) {
        elmHamburger.classList.add('is-opened-navi')
        elmOverlay.classList.add('is-opened')
        for (let i = 0; i < gNavItems.length; i++) {
          gNavItems[i].classList.add('is-opened')
        }
      } else {
        elmHamburger.classList.remove('is-opened-navi')
        elmOverlay.classList.remove('is-opened')
        for (let i = 0; i < gNavItems.length; i++) {
          gNavItems[i].classList.remove('is-opened')
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/util/_nav.scss';
@import '@/assets/scss/util/_demo.scss';
@import '@/assets/scss/pages/main.scss';
</style>
