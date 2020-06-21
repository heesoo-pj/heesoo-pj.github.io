<template>
  <div class="container main__wrap">
    <Nav />
    <div class="title-wrap">
      <h1 class="title">LEE HEE SOO PORTFOLIO</h1>
      <p class="subtitle">
        웹퍼블리셔 이희수 포트폴리오 사이트 입니다 :)
      </p>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
// import Title from '@/components/Title'

export default {
  components: { Nav },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  computed: {},
  mounted() {
    // this.ieCheck()
    document.querySelector('.main__wrap').addEventListener('mousemove', (e) => {
      this.titleMotion(e)
    })
  },
  methods: {
    ieCheck() {
      const agent = navigator.userAgent.toLowerCase()
      if (
        (navigator.appName === 'Netscape' &&
          navigator.userAgent.search('Trident') !== -1) ||
        agent.includes('msie')
      ) {
        // IE 일 경우
        alert('다른 브라우저를 이용해주세요.')
      }
    },
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

<style lang="scss" scoped>
@import '@/assets/scss/pages/main';
@mixin center() {
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}

html {
  width: 100%;
  height: 100%;
}
body {
  background: linear-gradient(rgb(235, 236, 231), rgb(255, 255, 255));
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: 'Raleway', sans-serif;
}
.title-wrap {
  position: absolute;
  @include center();
}

.maskbg {
  mask: url(#maskTitle);
}
.title {
  font-weight: 800;
  color: transparent;
  font-size: 108px;
  background: url('../assets/images/titleBg.jpg') repeat;
  background-position: 40% 50%;
  background-clip: text;
  position: relative;
  text-align: center;
  line-height: 92px;
  letter-spacing: -8px;

  // fill: url(#splash);
  // color: rgba(#000, 0.5)
}
.subtitle {
  display: block;
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  padding-top: 20px;
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
