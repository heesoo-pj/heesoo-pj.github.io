<template>
  <div class="title-wrap">
    <h1 class="title">LEE HEE SOO PORTFOLIO</h1>
    <p class="subtitle">
      웹퍼블리셔 이희수 포트폴리오 사이트 입니다 :)
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  created() {},
  mounted() {
    if (process.browser) {
      window.onNuxtReady((app) => {
        document
          .querySelector('.main__wrap')
          .addEventListener('mousemove', (e) => {
            this.titleMotion(e)
          })
      })
    }
  },
  methods: {
    titleMotion(e) {
      let mouseX = 0
      let mouseY = 0
      let traX = 0
      let traY = 0
      mouseX = e.pageX
      mouseY = e.pageY
      traX = (4 * mouseX) / 570 + 40
      traY = (4 * mouseY) / 570 + 50
      // document.querySelector('.bg__img').style.top = traY + '%'
      // document.querySelector('.bg__img').style.left = traX + '%'
      document.querySelector('.title').style.backgroundPosition =
        traX + '%' + traY + '%'
    }
  }
}
</script>
<style lang="scss" scoped></style>
