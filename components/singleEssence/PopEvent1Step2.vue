<template>
  <PopBase
    v-show="isShow"
    :show="isShow"
    :class-name="'event1Step2'"
    :mask="true"
    class="popup_event1Step2"
  >
    <template #content>
      <p class="eventStep2__txt">
        <img
          :src="`${imageUrl}/thum_txt` + userSelect.number + '.png'"
          alt=""
        />
      </p>
      <ul class="thum__item">
        <li
          v-for="list in selectList"
          :key="list.tit"
          :class="{ on: userSelect.number == list.number }"
          :data-gtm-action="list.gtmStepTwo"
          data-gtm-category="EVENT 01 2단계"
          @click="eventStep2Select(list)"
        >
          {{ list.tit }}
        </li>
      </ul>
      <Graph v-if="currentPop === 'PopEvent1Step2'" />

      <button
        class="popupBtn popupBtn__event1Join"
        data-gtm-category="EVENT 01 2단계"
        data-gtm-action="신청하기"
        @click="openPop({ popName: 'PopPersonal' })"
      >
        신청하기
      </button>
    </template>

    <template #closeButton>
      <button
        type="button"
        class="popupBtn__close popupBtn__close-b"
        @click="closePop"
      >
        닫기
      </button>
    </template>
  </PopBase>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PopBase from '@/components/shared/PopBase'
import Graph from '@/components/singleEssence/Graph'
// import { EventBus } from '@/plugins/EventBus'

export default {
  name: 'PopAlert',
  components: { PopBase, Graph },
  props: {
    isShow: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      imageUrl: (state) => `${state.singleEssence.imageUrlRoot}/popup`,
      userSelect: (state) => state.singleEssence.userSelect,
      selectList: (state) => state.singleEssence.selectList,
      currentPop: (state) => state.popup.currentPop
    })
  },
  watch: {
    currentPop() {
      if (this.currentPop === 'PopEvent1Step2') {
        this.startGraph(this.userSelect.number)
      }
    }
  },
  created() {
    // EventBus.$on('eventStep', (step) => {
    //   this.eventStep = step
    // })
  },
  mounted() {},
  methods: {
    ...mapActions('popup', ['closePop', 'openPop']),
    ...mapActions('singleEssence', ['setUserSelect']),
    startGraph(number) {
      setTimeout(() => {
        $('.graph' + number).addClass('on')
      }, 1000)
    },
    eventStep2Select(select) {
      //  console.log(this.userSelect)
      this.setUserSelect(select)
      $('.graph').removeClass('on')
      $('.graph' + select.number).addClass('on')
    }
  }
}
</script>
