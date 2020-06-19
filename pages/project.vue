<template>
  <div class="container">
    <Nav />
  </div>
</template>

<script>
// 동인비 , vw, 멸종동물, 스마트카라 유지보수, 베비언스, 쌤소나이트 , 펜타클
// https://www.kabrita.kr/
// https://www.event-donginbi.co.kr/mimaskstick/
import Nav from '@/components/Nav'
export default {
  components: { Nav },
  computed: {},
  methods: {},
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/main';
</style>
