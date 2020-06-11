<template>
  <form @submit.prevent>
    <div class="info__group">
      <div
        v-if="infoDefault === true"
        :style="{ order: `${order[0]}` }"
        class="info__item info__name d--flex"
      >
        <!-- 이름 -->
        <label :for="`${id}InfoName`">이름</label>
        <input
          :id="`${id}InfoName`"
          v-model="userModel.name"
          :disabled="userModel.isKmcAuthComplete"
          type="text"
          name="name"
        />

        <!-- 통신사 선택 -->
        <select
          v-if="phoneCorpAuth === true"
          id="phoneCorp"
          :disabled="userModel.isKmcAuthComplete"
          name="phoneCorp"
          class="phone__corp"
          @change="changeCorp($event)"
        >
          <option value="" selected disabled>통신사 선택</option>
          <option value="SKT">SKT</option>
          <option value="KTF">KT</option>
          <option value="LGT">LG U+</option>
          <option value="SKM">SKT 알뜰폰</option>
          <option value="KTF">KT 알뜰폰</option>
          <option value="LGT">LG U+ 알뜰폰</option>
        </select>
      </div>

      <div
        v-if="infoDefault === true"
        :style="{ order: `${order[1]}` }"
        class="info__item info__phone"
      >
        <!-- 연락처 -->
        <div class="d--flex">
          <label :for="`${id}InfoPhone`">연락처</label>
          <input
            :id="`${id}InfoPhone`"
            v-model="userModel.phone"
            :disabled="userModel.hasSentKmcAuth"
            type="tel"
            name="phone"
            maxlength="11"
            placeholder="'-' 없이 입력해주세요"
          />
          <button
            v-if="phoneCorpAuth === true && !userModel.isKmcAuthComplete"
            type="button"
            class="popupBtn popupBtn__phoneAuth"
            @click="sendKmcAuth()"
          >
            인증번호 발송
          </button>
        </div>
        <!-- 인증번호 -->
        <div
          v-if="userModel.hasSentKmcAuth && !userModel.isKmcAuthComplete"
          class="d--flex indent kmc"
        >
          <input
            :id="`${id}InfoPhone`"
            v-model="userModel.kmcAuthNum"
            type="tel"
            name="phone"
            maxlength="11"
            placeholder="인증번호를 입력해주세요"
          />
          <button
            v-if="phoneCorpAuth === true"
            type="button"
            class="popupBtn popupBtn__phoneAuth--complete"
            @click="confirmKmcAuth()"
          >
            인증번호 확인
          </button>
        </div>
      </div>
      <!-- url -->
      <div
        v-if="infoUrl === true"
        :style="{ order: `${order[3]}` }"
        class="info__item info__url d--flex"
      >
        <div class="d--flex">
          <label :for="`${id}InfoUrl`">url</label>
          <span v-if="defaultUrlText" class="info__url-fake"
            >www.instagram.com/</span
          >
          <input
            :id="`${id}InfoUrl`"
            v-model="userModel.id"
            type="text"
            name="url"
            class="url__input"
            placeholder="ID 입력"
          />
        </div>
      </div>
      <!-- 주소 -->
      <div
        v-if="infoAddress === true"
        :style="{ order: `${order[4]}` }"
        class="info__item info__address d--flex"
      >
        <div class="d--flex">
          <label :for="`${id}InfoAddressDetail`">주소</label>
          <input
            :id="`${id}InfoZipcode`"
            v-model="zipCode"
            type="text"
            name="zipcode"
            readonly
            class="zipcode__input"
          />
          <button
            type="button"
            class="popupBtn popupBtn__zipcode"
            @click="openPop({ popName: 'post' })"
          >
            우편번호찾기
          </button>
        </div>
        <input
          :id="`${id}InfoAddress`"
          v-model="address"
          type="text"
          name="address"
          class="address__input indent"
          readonly
        />
        <input
          :id="`${id}InfoAddressDetail`"
          v-model="userModel.addressDetail"
          type="text"
          name="addressDetail"
          class="address__input indent"
          placeholder="상세주소를 입력해주세요"
        />
      </div>
    </div>
    <!-- end:: info__group -->

    <!-- start :: agree_group -->
    <div v-if="agreements.length >= 1" class="agree__group">
      <div v-if="agreement.agreeAll === true" class="agree__all agree__item">
        <label :for="`${id}AgreeAll`">
          <input
            :id="`${id}AgreeAll`"
            v-model="agreeAll"
            type="checkbox"
            name="agreeAll"
            value="false"
          />
          <i
            :style="{
              flex: `0 0 ${agreement.checkboxSize[0]}px`,
              width: `${agreement.checkboxSize[0]}px`,
              height: `${agreement.checkboxSize[1]}px`,
              marginRight: `${agreement.checkboxSize[2]}px`,
              backgroundImage: `url(${imageUrl}/checkbox.png)`,
              backgroundPositionY: 'top'
            }"
            class="ir__checkBox"
          >
          </i>
          <img
            v-if="agreement.type === 'img'"
            :src="`${imageUrl}/txt-persoanl-agree-all.png`"
            alt="전체동의"
          />
          <span v-else>전체동의</span>
        </label>
      </div>

      <p
        v-for="(agree, idx) in agreements"
        :key="idx"
        :class="{ lgCorpOnly: agree.lgCorpOnly }"
        class="agree__item"
      >
        <label :for="`${id}Agree${idx}`">
          <input
            :id="`${id}Agree${idx}`"
            v-model="userModel[agree.name]"
            :name="agree.name"
            :value="agree.agree"
            type="checkbox"
          />
          <i
            :style="{
              flex: `0 0 ${agreement.checkboxSize[0]}px`,
              width: `${agreement.checkboxSize[0]}px`,
              height: `${agreement.checkboxSize[1]}px`,
              marginRight: `${agreement.checkboxSize[2]}px`,
              backgroundImage: `url(${imageUrl}/checkbox.png)`,
              backgroundPositionY: 'top'
            }"
            class="ir__checkBox"
          >
          </i>
          <img
            v-if="agreement.type === 'img'"
            :src="`${imageUrl}/${agree.img}`"
            :alt="`${agree.txt}`"
          />
          <span v-else class="agree__desc">{{ agree.txt }}</span>
        </label>

        <!-- 자세히 보기 버튼 -->
        <a
          v-if="!!agree.link"
          :href="agree.link"
          :class="{ fs0: agreement.type === 'img' }"
          class="popupBtn__agreeDetail "
          target="_blank"
          ><span class="a11y">{{ agree.txt }}</span> 자세히 보기</a
        >
        <button
          v-else
          :class="{ fs0: agreement.type === 'img' }"
          class="popupBtn__agreeDetail "
          @click="$emit('openAbovePop', agree.agreePopName)"
        >
          <span class="a11y">{{ agree.txt }}</span
          >자세히 보기
        </button>
      </p>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PersonalForm',
  props: {
    eventName: {
      type: String,
      default: '',
      required: true
    },
    id: {
      type: String,
      default: '',
      required: true
    },
    phoneCorpAuth: { type: Boolean, default: false },
    phoneCorpAuthApi: {
      type: Object,
      default: () => {
        return {
          check: '/api/kmc/authenticate',
          save: '/api/kmc/save'
        }
      }
    },
    infoDefault: {
      type: Boolean,
      default: true
    },
    infoAddress: {
      type: Boolean,
      default: true
    },
    infoUrl: {
      type: Boolean,
      default: false
    },
    defaultUrlText: {
      type: Boolean,
      default: true
    },
    agreement: {
      type: Object,
      default: () => {
        return {
          type: 'img',
          list: [],
          agreeAll: false,
          checkboxSize: [20, 20, 10]
        }
      }
    },
    order: {
      type: Array,
      default: () => {
        return [1, 2, 3, 4, 5, 6]
      }
    }
  },
  data() {
    return {
      userModel: {
        name: '',
        phoneCorp: '',
        phone: '',
        kmcAuthNum: '',
        hasSentKmcAuth: false,
        isKmcAuthComplete: false,
        zipCode: '',
        address: '',
        addressDetail: '',
        id: '',
        agree0: false,
        agree1: false,
        agree2: false,
        agree3: false,
        agree4: false,
        agree5: false
      },
      phoneCorpAgreementList: [
        {
          txt: '(간편인증서비스) 서비스 이용 동의',
          img: 'txt-corp-agree0.png',
          link: 'https://www.kmcert.com/qauth/terms/qauth_serviceUseAgree.html'
        },
        {
          txt: '(간편인증서비스) 개인정보 수집 및 이용 동의',
          img: 'txt-corp-agree1.png',
          link:
            'https://www.kmcert.com/qauth/terms/qauth_personalInfoAgree.html'
        },
        {
          txt: '(간편인증서비스) 개인정보 제3자 제공 동의',
          img: 'txt-corp-agree2.png',
          link:
            'https://www.kmcert.com/qauth/terms/qauth_thirdPersonSupplyAgree.html',
          lgCorpOnly: true
        }
      ]
    }
  },
  computed: {
    imageUrl() {
      return `${this.$store.state[this.eventName].imageUrlRoot}/popup`
    },
    agreements() {
      // 간편인증서비스 사용 여부가 true일때 동의항목 합쳐서 return
      const agreemenstListAll =
        this.phoneCorpAuth === true
          ? this.userModel.phoneCorp === 'LGT'
            ? [...this.agreement.list, ...this.phoneCorpAgreementList]
            : [
                ...this.agreement.list,
                this.phoneCorpAgreementList[0],
                this.phoneCorpAgreementList[1]
              ]
          : this.agreement.list

      return agreemenstListAll.map((agree, idx) => ({
        txt: agree.txt,
        img: agree.img,
        link: typeof agree.link === 'string' ? agree.link : undefined,
        agreePopName: typeof agree.name === 'string' ? agree.name : undefined,
        name: 'agree' + idx,
        lgCorpOnly: agree.lgCorpOnly ? agree.lgCorpOnly : false
      }))
    },
    agreeAll: {
      get() {
        return this.agreements.every((agree) => this.userModel[agree.name])
      },
      set(value) {
        this.agreements.forEach((agree) => (this.userModel[agree.name] = value))
      }
    },
    address() {
      return this.$store.state[this.eventName].userModel.address
    },
    zipCode() {
      return this.$store.state[this.eventName].userModel.zipCode
    }
  },
  methods: {
    ...mapActions('popup', ['openPop', 'setLoading']),
    changeCorp(e) {
      const lgOnly = $('.lgCorpOnly')
      this.userModel.phoneCorp = e.target.value
      e.target.value === 'LGT'
        ? lgOnly
            .css('display', 'flex')
            .hide()
            .fadeIn()
        : lgOnly.fadeOut()
    },
    sendKmcAuth() {
      if (!this.userModel.name) {
        alert('이름을 입력해주세요.')
        return
      }
      if (!this.userModel.phoneCorp) {
        alert('통신사를 선택해주세요.')
        return
      }
      if (!this.userModel.phone) {
        alert('연락처를 입력해주세요.')
        return
      }

      const userPhoneInfo = {
        name: this.userModel.name,
        phoneCorp: this.userModel.phoneCorp,
        phoneNo: this.userModel.phone
      }

      this.setLoading(true)
      // this.$store.dispatch(`${this.eventName}/setUserModel`, userAgree)
      this.$store.commit(`${this.eventName}/SET_USER_MODEL`, userPhoneInfo)

      this.$axios
        .post(`${this.phoneCorpAuthApi.check}`, userPhoneInfo)
        .then((res) => {
          this.setLoading(false)
          // console.log(res)
          if (res.data.result === 'Y') {
            alert(res.data.desc)
            // alert(res.data.response.desc)
            this.userModel.hasSentKmcAuth = true
          } else {
            alert(
              '인증이 실패되었습니다.\n본인인증을 다시 시도해 주세요. [' +
                res.data.desc +
                ']'
            )
          }
          /* setTimeout(function() {
              // 인증번호 입력칸으로 focus
              $('#personal-phone2').focus()
            }, 300) */
        })
        .catch((err) => {
          this.setLoading(false)
          // alert(err.response.data.error)
          // console.log(err)
          alert(err.response.data.error)
          /* setTimeout(function() {
            $('#personal-phone').focus()
          }, 200) */
        })
    },
    confirmKmcAuth() {
      this.$axios
        .post(
          `${this.phoneCorpAuthApi.save}?authNo=${this.userModel.kmcAuthNum}`
        )
        .then((res) => {
          // console.log(res)
          if (res.data.result === true) {
            alert('인증이 완료되었습니다.')
            // 인증번호 입력칸 hide, dimm show
            this.userModel.isKmcAuthComplete = true
          } else {
            // console.log('res')
            // console.log(res)
            alert(res.data.message)
          }
        })
        .catch((err) => {
          // console.log('err')
          // console.log(err)
          alert(err.response.data.error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.fs0 {
  font-size: 0;
}
.d--flex {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
}
label {
  display: inline-block;
  img {
    pointer-events: none;
  }
}

.info__group {
  display: flex;
  flex-direction: column;
  .info__item {
    // border: 1px solid red;
    input {
      //   width: 100%;
      flex-grow: 1;
      flex-shrink: 1;
    }
  }
  .info__name {
    .phone__corp {
      flex-basis: auto;
    }
  }
  .info__address {
    flex-direction: row;
    flex-wrap: wrap;
    .address__input {
      width: 100%;
    }
  }
}
.agree__group {
  .agree__item {
    position: relative;
    display: flex;
    justify-content: space-between;
    label {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 0;
    width: 1px;
    height: 1px;
    opacity: 0.001;
    &:checked ~ .ir__checkBox {
      background-position-y: bottom !important;
    }
  }

  .irCheckbox {
    display: inline-block;
    overflow: hidden;
  }
}
</style>
