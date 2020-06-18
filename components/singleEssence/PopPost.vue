<template>
  <PopPost
    :event-name="$store.state.singleEssence.eventName"
    @complete="complete"
  >
    <template #header>
      <img :src="imageUrl + '/tit_post.png'" alt="우편번호 찾기" />
    </template>

    <template #closeButton>
      <button
        class="popupBtn__close"
        @click="openPop({ popName: 'PopPersonal' })"
      ></button>
    </template>
  </PopPost>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PopPost from '@/components/shared/PopPost'

export default {
  name: 'PopPostSemester',
  components: {
    PopPost
  },
  computed: {
    ...mapState({
      imageUrl: (state) => `${state.singleEssence.imageUrlRoot}/popup`
    })
  },
  methods: {
    ...mapActions('popup', ['openPop']),
    complete() {
      this.openPop({ popName: 'PopPersonal' })
    }
  }
}
</script>
