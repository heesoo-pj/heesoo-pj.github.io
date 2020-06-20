<template>
  <section class="panels">
    <!-- left -->
    <article
      class="panels__side panels__side--left"
      @click="openPanels('left')"
    >
      <div class="panels__side panels__side--inner-left">
        <p>
          이름,생년,주소지, 경력사항
        </p>
      </div>
      <div class="panels__side panels__side--inner">
        <h1 class="panels__headline">Profile</h1>
        <svg
          class="arrow arrow--left"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24h-24z" fill="none" />
          <path
            d="M20 11h-12.17l5.59-5.59-1.42-1.41-8 8 8 8 1.41-1.41-5.58-5.59h12.17v-2z"
          />
        </svg>
      </div>
    </article>
    <!-- //left -->

    <!-- right  -->
    <article
      class="panels__side panels__side--right"
      @click="openPanels('right')"
    >
      <div class="panels__side panels__side--inner">
        <h1 class="panels__headline">
          Self <input id="" type="checkbox" name="" />
        </h1>
        <svg
          class="arrow arrow--right"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24h-24z" fill="none" />
          <path
            d="M12 4l-1.41 1.41 5.58 5.59h-12.17v2h12.17l-5.58 5.59 1.41 1.41 8-8z"
          />
        </svg>
      </div>
      <div class="panels__side panels__side--inner-right">
        <p></p>
      </div>
    </article>
    <!-- //right -->
  </section>
</template>
<script>
export default {
  methods: {
    openPanels(arrow) {
      const panelLeft = document.querySelector('.panels__side--left')
      const panelRight = document.querySelector('.panels__side--right')

      if (arrow === 'left') {
        panelLeft.classList.toggle('panels__side--left-active')
        panelRight.classList.toggle('panels__side--right-hidden')
      } else {
        panelRight.classList.toggle('panels__side--right-active')
        panelLeft.classList.toggle('panels__side--left-hidden')
      }
    }
  }
}
</script>

<style lang="scss" scope>
.container {
  width: 100%;
  overflow: hidden;
}

// * {
//   box-sizing: border-box;
//   -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
// }

// .overflow {
//   height: 100vh;
//   overflow: hidden;
// }
// .panels {
//   width: 200%;
//   &__side {
//     float: left;
//     width: 50%;
//     perspective: 400px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);

//     &--left,
//     &--right {
//       will-change: transform;
//       position: relative;
//       left: -25%;
//       transform: translate(0, 0);
//     }

//     &--left {
//       background: #f4d03f;
//       &:hover {
//         .arrow {
//           transform: translate(-100%, -50%);
//         }
//       }
//       &-active {
//         transform: translate(50%, 0);
//         transform: rotateY(0);
//       }

//       &-hidden {
//         transform: translate(-50%, 0);
//       }
//     }

//     &--right {
//       background: #19b5fe;

//       &:hover {
//         .arrow {
//           transform: translate(0, -50%);
//         }
//       }

//       &-active {
//         transform: translate(-50%, 0);
//         transform: rotateY(0);

//         .arrow {
//           transform: translate(-50%, -50%) rotate(180deg) !important;
//         }
//       }

//       &-hidden {
//         transform: translate(50%, 0);
//       }
//     }

//     &--inner {
//       &-left {
//         transform: rotateY(0);
//       }
//       &-right {
//         transform: rotateY(0);
//       }
//       &-active {
//         .arrow {
//           transform: translate(-50%, -50%) rotate(180deg) !important;
//         }
//       }
//     }
//   }
// }

// .panels__side--inner {
//   cursor: pointer;
// }
// .panels__side--inner-left,
// .panels__side--inner-right,
// .panels__side--inner {
//   will-change: transform;
//   padding: 0 5vw;
//   height: 100vh;
// }
// .panels__side--inner-left {
//   transform-origin: right center;
//   transform: rotateY(-90deg);
//   transition-delay: 0.1s;
//   background: url('//unsplash.it/1330/900') center/cover;
// }
// .panels__side--inner-left:before {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: #f4d03f;
//   z-index: -1;
//   opacity: 0.85;
// }
// .panels__side--inner-right {
//   transform-origin: left center;
//   transform: rotateY(90deg);
//   transition-delay: 0.1s;
//   background: url('//unsplash.it/1250/900') center/cover;
// }
// .panels__side--inner-right:before {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: #19b5fe;
//   z-index: -1;
//   opacity: 0.85;
// }
// .panels__headline {
//   margin: 0;
//   font-size: 40px;
//   text-align: center;
//   color: #1a1a1a;
// }
// .panels p {
//   font-size: 30px;
//   margin: 0;
// }
// @media (max-width: 640px) {
//   .panels {
//     width: 100%;
//     height: 200vh;
//   }
//   .panels__side {
//     float: none;
//     width: 100%;
//     height: 100vh;
//     display: block;
//     text-align: center;
//   }
//   .panels__side--left,
//   .panels__side--right {
//     top: -25%;
//     left: 0;
//   }
//   .panels__side--left:hover .arrow {
//     transform: translate(-50%, -80%) rotate(90deg);
//   }
//   .panels__side--right:hover .arrow {
//     transform: translate(-50%, -20%) rotate(90deg);
//   }
//   .panels__side--left-active {
//     transform: translate(0, 50%);
//   }
//   .panels__side--left-active .panels__side--inner-left {
//     transform: rotateX(0);
//   }
//   .panels__side--left-active .arrow {
//     transform: translate(-50%, -50%) rotate(-90deg) !important;
//   }
//   .panels__side--right-active {
//     transform: translate(0, -50%);
//   }
//   .panels__side--right-active .panels__side--inner-right {
//     transform: rotateX(0);
//   }
//   .panels__side--right-active .arrow {
//     transform: translate(-50%, -50%) rotate(-90deg) !important;
//   }
//   .panels__side--left-hidden {
//     transform: translate(0, -50%);
//   }
//   .panels__side--right-hidden {
//     transform: translate(0, 50%);
//   }
//   .panels__side--inner-left,
//   .panels__side--inner-right,
//   .panels__side--inner {
//     height: 50vh;
//     padding: 2vh 8vw;
//     display: -webkit-box;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
//   .panels__side--inner-left {
//     transform-origin: center bottom;
//     transform: rotateX(90deg);
//   }
//   .panels__side--inner-right {
//     transform-origin: center top;
//     transform: rotateX(-90deg);
//   }
//   .panels__headline {
//     font-size: 32px;
//   }
//   .panels p {
//     font-size: 20px;
//   }
// }
// .arrow {
//   position: absolute;
//   top: 75%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   fill: #1a1a1a;
//   border: 3px solid #1a1a1a;
//   border-radius: 50%;
//   transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
// }
// @media (max-width: 640px) {
//   .arrow {
//     transform: translate(-50%, -50%) rotate(90deg);
//   }
//   .arrow--left {
//     top: 25%;
//   }
// }
//--------------------------------------------css 하단 ------------
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
body {
  font-family: 'Montserrat';
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
.overflow {
  height: 100vh;
  overflow: hidden;
}
.panels {
  width: 200%;
}
.panels__side {
  float: left;
  width: 50%;
  -webkit-perspective: 400px;
  perspective: 400px;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}
.panels__side--left,
.panels__side--right {
  will-change: transform;
  position: relative;
  left: -25%;
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}
.panels__side--left {
  background: #fdc23e;
}
.panels__side--left:hover .arrow {
  -webkit-transform: translate(-100%, -50%);
  transform: translate(-100%, -50%);
}
.panels__side--right {
  background: #f9a11b;
}
.panels__side--right:hover .arrow {
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
}
.panels__side--left-active {
  -webkit-transform: translate(50%, 0);
  transform: translate(50%, 0);
}
.panels__side--left-active .panels__side--inner-left {
  -webkit-transform: rotateY(0);
  transform: rotateY(0);
}
.panels__side--left-active .arrow {
  -webkit-transform: translate(-50%, -50%) rotate(180deg) !important;
  transform: translate(-50%, -50%) rotate(180deg) !important;
}
.panels__side--right-active {
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}
.panels__side--right-active .panels__side--inner-right {
  -webkit-transform: rotateY(0);
  transform: rotateY(0);
}
.panels__side--right-active .arrow {
  -webkit-transform: translate(-50%, -50%) rotate(180deg) !important;
  transform: translate(-50%, -50%) rotate(180deg) !important;
}
.panels__side--left-hidden {
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}
.panels__side--right-hidden {
  -webkit-transform: translate(50%, 0);
  transform: translate(50%, 0);
}
.panels__side--inner {
  cursor: pointer;
}
.panels__side--inner-left,
.panels__side--inner-right,
.panels__side--inner {
  will-change: transform;
  padding: 0 5vw;
  height: 100vh;
}
.panels__side--inner-left {
  -webkit-transform-origin: right center;
  transform-origin: right center;
  -webkit-transform: rotateY(-90deg);
  transform: rotateY(-90deg);
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
  background: url('//unsplash.it/1330/900') center/cover;
}
.panels__side--inner-left:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f4d03f;
  z-index: -1;
  opacity: 0.85;
}
.panels__side--inner-right {
  -webkit-transform-origin: left center;
  transform-origin: left center;
  -webkit-transform: rotateY(90deg);
  transform: rotateY(90deg);
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
  background: url('//unsplash.it/1250/900') center/cover;
}
.panels__side--inner-right:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #19b5fe;
  z-index: -1;
  opacity: 0.85;
}
.panels__headline {
  margin: 0;
  font-size: 40px;
  text-align: center;
  color: #1a1a1a;
}
.panels p {
  font-size: 30px;
  margin: 0;
}
@media (max-width: 640px) {
  .panels {
    width: 100%;
    height: 200vh;
  }
  .panels__side {
    float: none;
    width: 100%;
    height: 100vh;
    display: block;
    text-align: center;
  }
  .panels__side--left,
  .panels__side--right {
    top: -25%;
    left: 0;
  }
  .panels__side--left:hover .arrow {
    -webkit-transform: translate(-50%, -80%) rotate(90deg);
    transform: translate(-50%, -80%) rotate(90deg);
  }
  .panels__side--right:hover .arrow {
    -webkit-transform: translate(-50%, -20%) rotate(90deg);
    transform: translate(-50%, -20%) rotate(90deg);
  }
  .panels__side--left-active {
    -webkit-transform: translate(0, 50%);
    transform: translate(0, 50%);
  }
  .panels__side--left-active .panels__side--inner-left {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
  }
  .panels__side--left-active .arrow {
    -webkit-transform: translate(-50%, -50%) rotate(-90deg) !important;
    transform: translate(-50%, -50%) rotate(-90deg) !important;
  }
  .panels__side--right-active {
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
  }
  .panels__side--right-active .panels__side--inner-right {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
  }
  .panels__side--right-active .arrow {
    -webkit-transform: translate(-50%, -50%) rotate(-90deg) !important;
    transform: translate(-50%, -50%) rotate(-90deg) !important;
  }
  .panels__side--left-hidden {
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
  }
  .panels__side--right-hidden {
    -webkit-transform: translate(0, 50%);
    transform: translate(0, 50%);
  }
  .panels__side--inner-left,
  .panels__side--inner-right,
  .panels__side--inner {
    height: 50vh;
    padding: 2vh 8vw;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .panels__side--inner-left {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: rotateX(90deg);
    transform: rotateX(90deg);
  }
  .panels__side--inner-right {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
  }
  .panels__headline {
    font-size: 32px;
  }
  .panels p {
    font-size: 20px;
  }
}
.arrow {
  position: absolute;
  top: 75%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  fill: #1a1a1a;
  border: 3px solid #1a1a1a;
  border-radius: 50%;
  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}
@media (max-width: 640px) {
  .arrow {
    -webkit-transform: translate(-50%, -50%) rotate(90deg);
    transform: translate(-50%, -50%) rotate(90deg);
  }
  .arrow--left {
    top: 25%;
  }
}
</style>
