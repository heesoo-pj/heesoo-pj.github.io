<template>
  <div class="container main__wrap">
    <Nav />
    <Title />
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Title from '@/components/Title'

export default {
  components: { Title, Nav },
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

<style lang="scss" scoped>
@import '@/assets/scss/pages/main';
</style>
