<template>
  <div>
    <!-- type종류 empty:빈팝업 -->
    <PopBase v-show="isShow" :show="isShow" :class-name="'personal'">
      <!-- 기본틀가지고 있는 팝업 사용 예시 -->
      <template #header>
        <img :src="`${imageUrl}/tit_personal.png`" alt="개인정보 입력" />
      </template>
      <template #content>
        <PersonalForm
          :id="'personal'"
          ref="event1Personal"
          :key="forceUpdate"
          :event-name="$store.state.singleEssence.eventName"
          :info-url="true"
          :default-url-text="true"
          :phone-corp-auth="true"
          :close-on-click-mask="true"
          :agreement="{
            list: [
              {
                txt: '개인정보 보호를 위한 이용자 동의사항',
                name: 'agree0'
              },
              {
                txt: '개인정보 처리 위탁에 대한 동의',
                name: 'agree1'
              }
            ],
            agreeAll: false,
            checkboxSize: [32, 32, 10]
          }"
          @openAbovePop="(agreePopName) => (currentAgree = agreePopName)"
        >
        </PersonalForm>
      </template>
      <template #footer>
        <button
          type="button"
          class="popupBtn popup__btn--complete"
          data-gtm-category="EVENT 01 3단계"
          data-gtm-action="개인정보 입력_완료"
          @click="sendUserModel"
        >
          신청완료
        </button>
      </template>

      <!-- 닫기버튼 custom 사용 예시 -->
      <template #closeButton>
        <!-- <button @click="openPop('example')" type="button" class="popup__close">
          닫기
        </button> -->
      </template>
    </PopBase>
    <AbovePop v-model="currentAgree"></AbovePop>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PopBase from '@/components/shared/PopBase'
import PersonalForm from '@/components/shared/PersonalForm'
import AbovePop from '@/components/singleEssence/AbovePopAgreement'

export default {
  name: 'PopPersonal',
  components: { PopBase, PersonalForm, AbovePop }, // AbovePopExample
  props: {
    isShow: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data() {
    return {
      currentAgree: null
    }
  },
  computed: {
    ...mapState({
      imageUrl: (state) => `${state.singleEssence.imageUrlRoot}/popup`,
      forceUpdate: (state) => state.popup.forceUpdate,
      userSelect: (state) => state.singleEssence.userSelect
    })
  },
  methods: {
    ...mapActions('popup', ['openPop', 'closePop']),
    ...mapActions('singleEssence', ['sendApiUserModel']),
    sendUserModel() {
      const userData = {
        phoneCorp: `${this.$refs.event1Personal.userModel.phoneCorp}`,
        instagramId: `${this.$refs.event1Personal.userModel.id}`,
        phoneNo: `${this.$refs.event1Personal.userModel.phone}`,
        name: `${this.$refs.event1Personal.userModel.name}`,

        addressDetail: `${this.$refs.event1Personal.userModel.addressDetail}`,
        kmcAuthNum: this.$refs.event1Personal.userModel.kmcAuthNum,
        isKmcAuthComplete: this.$refs.event1Personal.userModel
          .isKmcAuthComplete,
        hasSentKmcAuth: this.$refs.event1Personal.userModel.hasSentKmcAuth,
        agree: this.$refs.event1Personal.userModel.agree0,
        agree2: this.$refs.event1Personal.userModel.agree1,
        agree3: this.$refs.event1Personal.userModel.agree2,
        agree4: this.$refs.event1Personal.userModel.agree3,
        agree5: this.$refs.event1Personal.userModel.agree4
      }
      if (userData.phoneCorp !== 'LGT') {
        userData.agree5 = true
      }
      this.$store.commit('singleEssence/SET_USER_MODEL', userData)
      this.sendApiUserModel()
    }
  }
}
</script>
