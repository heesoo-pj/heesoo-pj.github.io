<template>
  <div class="title-wrap">
    <!-- <svg>
      <defs>
        <pattern
          id="splash"
          patternUnits="userSpaceOnUse"
          width="600"
          height="400"
          viewbox="0 0 600 400"
        >
          <image
            class="bg__img"
            xlink:href="https://phandroid.s3.amazonaws.com/wp-content/uploads/2014/05/rainbow-nebula.jpg"
            width="600"
            height="400"
          />
        </pattern>
      </defs>
    </svg> 

    <h1 class="title">
      <svg width="600" height="200">
        <text x="50%" y="50%" text-anchor="middle">PATTERN</text>
      </svg>
    </h1>-->

    <h1 class="title">ROBERT DEVELOPER</h1>
    <p class="subtitle">
      geek + smart + curious + nerd + ingenious + cunning = ME
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
        document.body.addEventListener('mousemove', (e) => {
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
<style lang="scss">
@mixin center(){
  transform: translate(-50%,-50%);
  left:50%;
  top:50%;
}


@import url(https://fonts.googleapis.com/css?family=Raleway:400,,800,900);
html{
  width:100%;
  height: 100%;
}
body{
  background: -webkit-linear-gradient(rgb(235, 236, 231), rgb(255, 255, 255));
  background: linear-gradient(rgb(235, 236, 231), rgb(255, 255, 255));
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: 'Raleway', sans-serif;
}
.title-wrap{
  position:absolute;
  @include center();
}

.maskbg{
  mask: url(#maskTitle);
}
.title{
  font-weight: 800;
  color: transparent;
  font-size:120px;
  background: url("@/assets/images/titleBg.jpg") repeat;
  background-position: 40% 50%;
  background-clip: text;
  position:relative;
  text-align:center;
  line-height:90px;
  letter-spacing: -8px;

  // fill: url(#splash);
  // color: rgba(#000, 0.5)
}
.subtitle{
  display: block;
  text-align: center;
  text-transform: uppercase;
  padding-top:10px;
}
</style>
