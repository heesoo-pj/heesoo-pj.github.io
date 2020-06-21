<template>
  <section class="panels">
    <!-- left -->
    <article
      class="panels__side panels__side--left"
      @click="openPanels('left')"
    >
      <div class="panels__side panels__side--inner-left">
        <!-- <p>
          이름,생년,주소지, 경력사항
        </p> -->

        <h2>이희수 <sub>(1992.12)</sub></h2>
        <ul class="profile__list">
          <li><span>2015.10 - 2016.03</span> 스마트웹 / 컨텐츠개발 수료</li>
          <li>
            <span>2016.04 - 2016.10</span> 더다함커뮤니케이션
            <ul class="pj__list">
              <li>킨텍스 원시티</li>
              <li>거제센트럴자이</li>
              <li>동천자이 2차</li>
              <li>평택 자이 더 익스프레스 3차</li>
              <li>백련산파크자이</li>
              <li>세종 신동아 파밀리에 4차</li>
              <li>
                <a href="http://whitekorea.kr" target="_blank"
                  >화이트코리아(주)</a
                >
              </li>
            </ul>
            <p>등 다수 페이지 작업</p>
          </li>
          <li>
            <span>2016.11 ~ 재직 중</span> 메가존 재직
            <ul class="pj__list">
              <li>
                <a
                  href="https://event.dolce-gusto.co.kr/electronics"
                  target="_blank"
                  >돌체쿠스토 일렉트로마트</a
                >
              </li>
              <li>킨더조이, 킨더크리스피 이벤트 작업</li>
              <li>
                <a href="http://coverdance.seoul.co.kr"
                  >커버댄스 사이트 유지보수</a
                >
              </li>
              <li>
                <a href="https://www.samsonitemall.co.kr/" target="_blank"
                  >쌤소나이트 기획전, 이벤트, 뉴스레터, 사이트 유지보수</a
                >
              </li>
              <li>Finnq 룰렛이벤트</li>
              <li>ING생명 모바일 이벤트</li>
              <li>LG U+ 알뜰 모바일 S9 이벤트</li>
              <li>
                <a href="https://www.kabrita.kr/" target="_blank"
                  >베비언스 카브리타 마이크로 사이트</a
                >
              </li>
              <li>
                <a
                  href="https://www.event-donginbi.co.kr/mimaskstick/"
                  target="_blank"
                  >동인비 미마스크 프로모션</a
                >
              </li>
              <li>이자녹스 더블 이펙트 프로모션</li>
              <li>
                <a
                  href="https://www.ferrerorocher-event.co.kr/2019_goldenbell"
                  target="_blank"
                  >2019 페레로로쉐 골든벨 이벤트</a
                >
              </li>
              <li>
                <a
                  href="https://events.uplus.co.kr/lostanimalpark"
                  target="_blank"
                  >LGU+ 멸종동물공원 프로모션 모바일 페이지</a
                >
              </li>
              <li>
                폭스바겐 투아렉 런칭 사이트
              </li>
            </ul>
            <p>등 다수 페이지 작업</p>
          </li>
        </ul>
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
          About myself & Skill
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
        <p>
          "진취적이며 웃음이 넘치는" 웹퍼블리셔 이희수입니다!<br />
          홈페이지 유지 보수, 다양한 이벤트 페이지, 사이트 제작으로 누구보다
          재미난 작업물을 많이 작업했으며, <br />그로 인한 다양한 경험을 해왔다
          자부합니다.
          <br />
          <br />
          혼자 하는 일이 아닌 협업을 하는 일이다 보니, 기획자 디자이너 간의
          소통을 중요하게 생각하고<br />맡은 일에 책임감을 느끼며 일하고
          있습니다.
          <br />
          <br />
          또한 기술적으로도 안주하지 않고 다양한 작업을 하기 위해 끊임없이 공부
          중이며,<br />현재는 VUE, SVG를 공부 중입니다.
        </p>

        <div class="skill__wrap">
          <h3>Skill</h3>
          <ul>
            <li>XHTML, HTML5</li>
            <li>
              CSS / CSS3 / Media query / SCSS & LESS / BEM / SMACSS등 CSS방법론
              / Cross browsing
            </li>
            <li>Javascript(ES6) / jQuery / Vue (CLI / NUXT)</li>
            <li>SVG / AJAX / Git 소스관리 / Gulp</li>
          </ul>
        </div>
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
    //left
    &--left {
      background: #fdc23e;
      &:hover {
        .arrow {
          transform: translate(-100%, -50%);
        }
      }
      &-active {
        transform: translate(50%, 0);

        .arrow {
          transform: translate(-50%, -50%) rotate(180deg) !important;
        }
        .panels__side--inner-left {
          transform: rotateY(0);
          flex-direction: column;
        }
      }

      &-hidden {
        transform: translate(-50%, 0);
      }
    }

    //right
    &--right {
      background: #f9a11b;

      &:hover {
        .arrow {
          transform: translate(0, -50%);
        }
      }
      &-active {
        transform: translate(-50%, 0);
        .arrow {
          transform: translate(-50%, -50%) rotate(180deg) !important;
        }

        .panels__side--inner-right {
          transform: rotateY(0);
          flex-direction: column;
          h3 {
            font-family: 'Staatliches', cursive;
          }
        }
      }

      &-hidden {
        transform: translate(50%, 0);
      }
    }

    &--inner {
      cursor: pointer;
      will-change: transform;
      padding: 0 5vw;
      height: 100vh;
      &-left,
      &-right {
        will-change: transform;
        padding: 0 5vw;
        height: 100vh;
      }

      &-left {
        transform-origin: right center;
        transform: rotateY(-90deg);
        transition-delay: 0.1s;
        background: url('../assets/images/panels02.jpg') center/cover;

        &::before {
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
      }
      &-right {
        transform-origin: left center;
        transform: rotateY(90deg);
        transition-delay: 0.1s;
        background: url('../assets/images/panels01.jpg') center/cover;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #f9a11b;
          z-index: -1;
          opacity: 0.85;
        }
      }
    }
  }

  &__headline {
    margin: 0;
    font-size: 50px;
    text-align: center;
    color: #1a1a1a;
    font-weight: bold;
    font-family: 'Staatliches', cursive;
  }
  h2 {
    margin-bottom: 40px;
    font-size: 3vw;
    font-weight: bold;
    sub {
      font-size: 2vw;
    }
  }
  p {
    font-size: 19px;
    line-height: 26px;
    word-break: keep-all;
  }
  .profile__list li {
    margin: 0;
    font-size: 22px;
    line-height: 35px;
    span {
      font-weight: 600;
    }
    p {
      font-size: 1vw;
    }
  }
  .pj__list li {
    line-height: 23px;
    font-size: 14px;
    color: #0b0c0e;
    a {
      color: #0b0c0e;
    }
  }
  .skill__wrap {
    margin-top: 20px;
    border-top: 1px solid #33333361;
    h3 {
      font-size: 25px;
      padding: 30px 0 20px;
    }
    li {
      position: relative;
      line-height: 28px;
      font-size: 18px;
      &::before {
        content: '·';
        position: absolute;
        left: -20px;
        font-size: 50px;
        color: #f13416;
      }
    }
  }
}

/* @media (max-width: 640px) {
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
} */
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
/* @media (max-width: 640px) {
  .arrow {
    -webkit-transform: translate(-50%, -50%) rotate(90deg);
    transform: translate(-50%, -50%) rotate(90deg);
  }
  .arrow--left {
    top: 25%;
  }
} */
</style>
