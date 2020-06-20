<template>
  <div class="container">
    <Nav />

    <ul class="pf__wrap">
      <li v-for="pf in pfData1" :key="pf.id" @click="openPopup(pf)">
        {{ pf.title }}
      </li>
    </ul>

    <!-- POPUP -->
    <transition name="fade">
      <div v-show="popupOn" class="popup__wrap">
        <div class="popup">
          <button type="button" class="btn btn__close" @click="closePopup()">
            닫기
          </button>
          <div class="popup__inner">
            <h3>
              {{ popOnData.title }}
            </h3>
            <dl>
              <dt>Skill</dt>
              <dd>{{ popOnData.skill }}</dd>

              <dt>참여도</dt>
              <dd>{{ popOnData.role }}</dd>

              <dt>설명</dt>
              <dd v-html="popOnData.txt"></dd>
            </dl>
            <img class="popup__img" :src="popOnData.img" alt="" />

            <div class="btn__wrap">
              <a
                class="btn__go btn__pageGo"
                :href="popOnData.url"
                target="_blank"
                >페이지 바로가기</a
              >
              <a
                class="btn__go btn__sourceGo"
                :href="popOnData.sourceUrl"
                target="_blank"
                >소스보기</a
              >
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// 동인비 , vw, 멸종동물, 스마트카라 유지보수, 베비언스, 쌤소나이트 , 펜타클
// https://www.kabrita.kr/
// https://www.event-donginbi.co.kr/mimaskstick/
import Nav from '@/components/Nav'
export default {
  components: { Nav },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  data() {
    return {
      pfData1: [
        {
          id: 0,
          title: '폭스바겐 투아렉 프로모션',
          url: 'https://leeheesoo.github.io/vw',
          sourceUrl:
            'https://github.com/leeheesoo/leeheesoo.github.io/tree/master/vw',
          skill: 'HTML5, CSS, CSS3, SCSS, Javascript, Vue.js',
          role: '100%',
          txt:
            '폭스바겐 투아렉 런칭 프로모션 페이지입니다.<br>( 작업기간 PC, MO : 3주 )',
          img: '/images/pf/vw.png'
        },
        {
          id: 1,
          title: '동인비 싱글 에센스 이벤트',
          url: 'https://singleessence.event-donginbi.co.kr/',
          sourceUrl:
            'https://github.com/heesoo-pj/heesoo-pj.github.io/tree/master/components/singleEssence',
          skill: 'HTML5, CSS, CSS3, SCSS, Javascript, Vue.js (NUXT)',
          role: '100%',
          txt:
            '개인정보 입력 후 즉석당첨 이벤트를 참여하여 결과를 확인하는 페이지 입니다.<br>( 작업기간 PC, MO : 2주 )',
          img: '/images/pf/donginbi.png'
        },
        {
          id: 2,
          title: '카브리타 마이크로사이트',
          url: 'https://www.kabrita.kr',
          sourceUrl: '',
          skill: 'HTML5, CSS, SCSS, Javascript, Vue.js',
          role: '100%',
          txt:
            '베비언스 카브리타 마이크로사이트 입니다.<br>설문조사, OX퀴즈 이벤트 페이지로 구성되어 있습니다.<br>( 작업기간 PC, MO : 3주 )',
          img: '/images/pf/kabrita.png'
        },
        {
          id: 3,
          title: '펜타클 자사 홈페이지',
          url: 'https://www.pentacle.co.kr/',
          sourceUrl: '',
          skill: 'HTML5, CSS, Javascript, jQuery',
          role: '50%',
          txt: '펜타클 자사 홈페이지 입니다.<br>( 작업기간 : 2개월  )',
          img: '/images/pf/pentacle.png'
        },
        {
          id: 4,
          title: 'LG U+ 멸종동물 캠페인 (모바일)',
          url: 'https://leeheesoo.github.io/lostpark/',
          sourceUrl:
            'https://github.com/leeheesoo/leeheesoo.github.io/tree/master/lostpark',
          skill: 'HTML5, CSS, SCSS, Javascript, Vue.js',
          role: '100%',
          txt:
            'LG U+ 에서 진행한 모바일 전용 캠페인 페이지입니다.<br>로그인 체크 여부 확인 후 하루 한번 퀴즈를 참여하는 이벤트 입니다.<br>( 작업기간 MO : 1주 )',
          img: '/images/pf/lg.png'
        },
        {
          id: 5,
          title: '스마트카라 런칭프로모션',
          url: 'https://www.event-smartcara.com/launching',
          sourceUrl: '',
          skill: 'HTML5, CSS, SCSS, Javascript, Vue.js (Nuxt)',
          role: '100%',
          txt:
            '스마트카라 신제품 런칭 프로모션으로<br>영상 선택에 따라 결과를 보여주는 이벤트 페이지입니다.<br>( 작업기간 PC, MO : 1주 )',
          img: '/images/pf/smartcara.png'
        }
      ],
      popupOn: false,
      popOnData: []
    }
  },
  computed: {},
  methods: {
    openPopup(data) {
      this.popOnData = data
      this.popupOn = true
    },
    closePopup() {
      this.popupOn = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/main';
.container {
  display: flex;
  align-items: center;
  background: linear-gradient(rgb(235, 236, 231), rgb(255, 255, 255));
}
.popup__wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: rgba(0, 0, 0, 0.6);
}
.popup {
  position: relative;
  width: 1020px;
  min-height: 500px;
  font-size: 20px;
  background: #fff;
  padding-top: 20px;
  border-radius: 5px;
  background: linear-gradient(rgb(235, 236, 231), rgb(255, 255, 255));

  &__inner {
    width: 90%;
    padding: 40px 0;
    margin: 0 auto;
  }

  &__img {
    display: inline-block;
    width: 36%;
  }

  h3 {
    font-size: 1.8em;
    padding-bottom: 30px;
    font-weight: bold;
    letter-spacing: -1px;
  }
  dl {
    display: inline-block;
    width: 61%;
    vertical-align: top;
  }
  dt,
  dd {
    display: inline-block;
    line-height: 30px;
    letter-spacing: -0.5px;
    word-break: keep-all;
  }

  dt {
    position: relative;
    width: 15%;
    margin-bottom: 10px;
    vertical-align: top;
    &::before {
      content: '·';
      position: absolute;
      left: -15px;
      top: 0;
      font-size: 40px;
      color: #ff7761;
    }
  }

  dd {
    width: 79%;
    font-size: 0.87em;
    color: #504e4e;
  }

  .btn__wrap {
    /* margin-top: 80px; */
    text-align: left;
  }
  .btn {
    cursor: pointer;
    &__close {
      position: absolute;
      right: 0;
      top: -60px;
      width: 50px;
      height: 50px;
      background: url('../assets/images/btn_close.svg');
      font-size: 0;
    }

    &__go {
      display: inline-block;
      width: 200px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      text-decoration: none;
      color: #fff;
      font-weight: bold;
    }
    &__sourceGo {
      background-color: #fdc23e;
    }
    &__pageGo {
      background-color: #f9a11b;
    }
  }
}
</style>
