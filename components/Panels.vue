<template>
  <section class="panels">
    <!-- left -->
    <article
      class="panels__side panels__side--left"
      @click="openPanels('left')"
    >
      <div class="panels__side panels__side--inner-left">
        <ul class="profile__list">
          <li>
            <span>2020.9 ~ 재직중</span> 인터파크
            <ul class="pj__list">
              <li><a href="http://interpark.co.kr/malls/index.html" target="_balnk">인터파크 유지보수 및 프로젝트 진행</a></li>
            </ul>
          </li>
          <li>
            <span>2016.11 ~ 2020.8</span> 메가존
            <ul class="pj__list">
              <li>돌체쿠스토 일렉트로마트</li>
              <li>킨더조이, 킨더크리스피 이벤트 작업</li>
              <li>
                <a href="http://coverdance.seoul.co.kr" target="_blank"
                  >커버댄스 사이트 유지보수</a
                >
              </li>
              <li>
                <a href="https://www.samsonitemall.co.kr/" target="_blank"
                  >쌤소나이트 기획전, 이벤트, 뉴스레터, 사이트 유지보수</a
                >
              </li>
              <li>Finnq 룰렛이벤트</li>
              <li>베비언스 카브리타 마이크로 사이트</li>
              <li>동인비 미마스크 프로모션</li>
              <li>LGU+ 멸종동물공원 프로모션 모바일 페이지
              <li>폭스바겐 투아렉 런칭 사이트</li>
            </ul>
            <p>등 다수 페이지, 프로모션 작업</p>
          </li>
          <li>
            <span>2016.04 - 2016.10</span> 더다함커뮤니케이션
            <ul class="pj__list">
              <li>킨텍스 원시티</li>
              <li>거제센트럴자이</li>
              <li>동천자이 2차</li>
              <li>
                <a href="http://whitekorea.kr" target="_blank"
                  >화이트코리아(주)</a
                >
              </li>
            </ul>
            <p>등 다수 사이트 작업</p>
          </li>
          <li><span>2015.10 - 2016.03</span> 스마트웹 / 컨텐츠개발 수료</li>
        </ul>
      </div>
      <div class="panels__side panels__side--inner">
        <h1 class="panels__headline">Profile</h1>
        <svg
          version="1.1"
          class="arrow arrow--left"
          x="0px"
          y="0px"
          viewBox="0 0 368 368"
          style="enable-background:new 0 0 368 368;"
          xml:space="preserve"
        >
          <path
            d="M184,0C82.544,0,0,82.544,0,184s82.544,184,184,184s184-82.544,184-184S285.456,0,184,0z M184,352
				c-92.64,0-168-75.36-168-168S91.36,16,184,16s168,75.36,168,168S276.64,352,184,352z"
          />
          <path
            d="M115.312,184l58.344-58.344c3.128-3.128,3.128-8.184,0-11.312s-8.184-3.128-11.312,0l-64,64
				c-3.128,3.128-3.128,8.184,0,11.312l64,64c1.56,1.56,3.608,2.344,5.656,2.344c2.048,0,4.096-0.784,5.656-2.344
				c3.128-3.128,3.128-8.184,0-11.312L115.312,184z"
          />
          <path
            d="M253.656,114.344c-3.128-3.128-8.184-3.128-11.312,0l-64,64c-3.128,3.128-3.128,8.184,0,11.312l64,64
				c1.56,1.56,3.608,2.344,5.656,2.344c2.048,0,4.096-0.784,5.656-2.344c3.128-3.128,3.128-8.184,0-11.312L195.312,184
				l58.344-58.344C256.784,122.528,256.784,117.472,253.656,114.344z"
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
          x="0px"
          y="0px"
          viewBox="0 0 368 368"
          xml:space="preserve"
        >
          <path
            d="M184,0C82.544,0,0,82.544,0,184s82.544,184,184,184s184-82.544,184-184S285.456,0,184,0z M184,352
				c-92.64,0-168-75.36-168-168S91.36,16,184,16s168,75.36,168,168S276.64,352,184,352z"
          />
          <path
            d="M205.656,114.344c-3.128-3.128-8.184-3.128-11.312,0c-3.128,3.128-3.128,8.184,0,11.312L252.688,184l-58.344,58.344
				c-3.128,3.128-3.128,8.184,0,11.312c1.56,1.56,3.608,2.344,5.656,2.344c2.048,0,4.096-0.784,5.656-2.344l64-64
				c3.128-3.128,3.128-8.184,0-11.312L205.656,114.344z"
          />
          <path
            d="M189.656,178.344l-64-64c-3.128-3.128-8.184-3.128-11.312,0s-3.128,8.184,0,11.312L172.688,184l-58.344,58.344
				c-3.128,3.128-3.128,8.184,0,11.312c1.56,1.56,3.608,2.344,5.656,2.344c2.048,0,4.096-0.784,5.656-2.344l64-64
				C192.784,186.528,192.784,181.472,189.656,178.344z"
          />
        </svg>
      </div>
      <div class="panels__side panels__side--inner-right">
        <div class="skill__wrap">
          <h3>Skill</h3>
          <ul>
            <li>XHTML, HTML5</li>
            <li>
              CSS / CSS3 / Media query / SCSS & LESS / BEM, SMACSS등 CSS방법론 /
              Cross browsing
            </li>
            <li>Javascript(ES6) / jQuery / Vue (CLI / NUXT)</li>
            <li>SVG / AJAX / Git 소스관리 / Gulp</li>
          </ul>
        </div>

        <p>
          "진취적이며 웃음이 넘치는" 웹퍼블리셔 <b>이희수</b>입니다!<br />
          홈페이지 유지 보수, 다양한 이벤트 페이지, 사이트 제작으로 누구보다
          재미난 작업물을 많이 작업했으며, 그로 인한 다양한 경험을 해왔다
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
    margin-bottom: 14px;
    font-size: 2vw;
    font-weight: 700;
    sub {
      font-size: 2vw;
    }
  }
  p {
    width: 100%;
    font-size: 19px;
    line-height: 26px;
    word-break: keep-all;
  }
  .profile__list li {
    width: 100%;
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
    width: 100%;
    position: relative;
    line-height: 23px;
    font-size: 14px;
    color: #0b0c0e;
    a {
      color: #0b0c0e;
    }

    &::before {
      content: '·';
      position: absolute;
      left: -20px;
      font-size: 50px;
      color: #f134169e;
    }
  }
  .skill__wrap {
    width: 100%;
    margin-bottom: 70px;
    padding-bottom: 80px;
    border-bottom: 1px solid #33333361;
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

.arrow {
  position: absolute;
  top: 75%;
  left: 50%;
  width: 80px;
  transform: translate(-50%, -50%);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}
</style>
