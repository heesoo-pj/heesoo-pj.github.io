<template>
  <div>
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
      window.onNuxtReady((app) => {})
    }
  },
  methods: {}
}
</script>
<style lang="scss">
@mixin center(){
  -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
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
.container{
  position:absolute;
  @include center();
}
.title{
  font-weight: 800;
  color: transparent;
  font-size:120px;
  background: url("https://phandroid.s3.amazonaws.com/wp-content/uploads/2014/05/rainbow-nebula.jpg") repeat;
  background-position: 40% 50%;
  -webkit-background-clip: text;
  position:relative;
  text-align:center;
  line-height:90px;
  letter-spacing: -8px;
}
.subtitle{
  display: block;
  text-align: center;
  text-transform: uppercase;
  padding-top:10px;
}
</style>
