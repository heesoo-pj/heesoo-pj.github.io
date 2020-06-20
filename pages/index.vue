<template>
  <div class="container">
    <Nav />
    <Title />
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Title from '@/components/Title'

export default {
  components: { Title, Nav },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  computed: {},
  methods: {}
  // head() {
  //   return {
  //     link: [
  //       {
  //         rel: 'stylesheet',
  //         href:
  //           'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap'
  //       }
  //     ]
  //   }
  // }
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/main';
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700;900&display=swap');
</style>
