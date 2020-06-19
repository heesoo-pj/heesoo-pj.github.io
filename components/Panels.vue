<template>
  <section class="panels">
    <!-- left -->
    <article class="panels__side panels__side--left">
      <div class="panels__side panels__side--inner-left">
        <p>
          "Changes and progress very rarely are gifts from above. They come out
          of struggles from below."
        </p>
      </div>
      <div class="panels__side panels__side--inner">
        <h1 class="panels__headline">Noam Chomsky</h1>
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

    <!-- right  -->
    <article class="panels__side panels__side--right">
      <div class="panels__side panels__side--inner">
        <h1 class="panels__headline">Buzz Aldrin</h1>
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
        <p>
          "The biggest benefit of Apollo was the inspiration it gave to a
          growing generation to get into science and aerospace."
        </p>
      </div>
    </article>
  </section>
</template>
<script>
export default {
  methods: {}
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

.overflow {
  height: 100vh;
  overflow: hidden;
}
.panels {
  width: 200%;
  &__side {
    float: left;
    width: 50%;
    perspective: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);

    &--left,
    &--right {
      will-change: transform;
      position: relative;
      left: -25%;
      transform: translate(0, 0);
    }

    &--left {
      background: #f4d03f;
      &:hover {
        .arrow {
          transform: translate(-100%, -50%);
        }
      }
      &-active {
        transform: translate(50%, 0);
      }
    }

    &--right {
      background: #19b5fe;

      &:hover {
        .arrow {
          transform: translate(0, -50%);
        }
      }
    }
  }
}

.panels__side--left-active .panels__side--inner-left {
  transform: rotateY(0);
}
.panels__side--left-active .arrow {
  transform: translate(-50%, -50%) rotate(180deg) !important;
}
.panels__side--right-active {
  transform: translate(-50%, 0);
}
.panels__side--right-active .panels__side--inner-right {
  transform: rotateY(0);
}
.panels__side--right-active .arrow {
  transform: translate(-50%, -50%) rotate(180deg) !important;
}
.panels__side--left-hidden {
  transform: translate(-50%, 0);
}
.panels__side--right-hidden {
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
  transform-origin: right center;
  transform: rotateY(-90deg);
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
  transform-origin: left center;
  transform: rotateY(90deg);
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
    transform: translate(-50%, -80%) rotate(90deg);
  }
  .panels__side--right:hover .arrow {
    transform: translate(-50%, -20%) rotate(90deg);
  }
  .panels__side--left-active {
    transform: translate(0, 50%);
  }
  .panels__side--left-active .panels__side--inner-left {
    transform: rotateX(0);
  }
  .panels__side--left-active .arrow {
    transform: translate(-50%, -50%) rotate(-90deg) !important;
  }
  .panels__side--right-active {
    transform: translate(0, -50%);
  }
  .panels__side--right-active .panels__side--inner-right {
    transform: rotateX(0);
  }
  .panels__side--right-active .arrow {
    transform: translate(-50%, -50%) rotate(-90deg) !important;
  }
  .panels__side--left-hidden {
    transform: translate(0, -50%);
  }
  .panels__side--right-hidden {
    transform: translate(0, 50%);
  }
  .panels__side--inner-left,
  .panels__side--inner-right,
  .panels__side--inner {
    height: 50vh;
    padding: 2vh 8vw;
    display: -webkit-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .panels__side--inner-left {
    transform-origin: center bottom;
    transform: rotateX(90deg);
  }
  .panels__side--inner-right {
    transform-origin: center top;
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
  transform: translate(-50%, -50%);
  fill: #1a1a1a;
  border: 3px solid #1a1a1a;
  border-radius: 50%;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}
@media (max-width: 640px) {
  .arrow {
    transform: translate(-50%, -50%) rotate(90deg);
  }
  .arrow--left {
    top: 25%;
  }
}
</style>
