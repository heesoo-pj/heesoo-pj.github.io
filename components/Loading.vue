<template>
  <div class="loader">
    <svg height="100%" width="100%" class="svg-wrap">
      <circle class="circle" r="100%" cx="50%" cy="50%" fill="#fff" />
    </svg>
  </div>
</template>

<style lang="css">
.loader {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 1;
  z-index: 99;
  width: 100%;
  height: 100%;
  -moz-transition-property: all;
  -o-transition-property: all;
  -webkit-transition-property: all;
  transition-property: all;
  -moz-transition-duration: 2s;
  -o-transition-duration: 2s;
  -webkit-transition-duration: 2s;
  transition-duration: 2s;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
}
.loader .svg-wrap,
.loader .circle {
  -moz-transition-property: all;
  -o-transition-property: all;
  -moz-transition-duration: 2s;
  -o-transition-duration: 2s;
  -webkit-transition-duration: 2s;
  transition-duration: 2s;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
}
.loader .circle {
  cx: 50%;
  cy: 50%;
  -webkit-transition-property: all;
  transition-property: all;
}
.loader.end {
  z-index: -1;
}
.loader.end .circle {
  r: 0;
}
.loader.end .svg-wrap {
  -ms-transform: scale(0, 0);
}
.loader.exit {
  z-index: 100;
}
.loader.exit .circle {
  r: 100%;
}
.loader.exit .svg-wrap {
  -ms-transform: scale(1, 1);
}
</style>
