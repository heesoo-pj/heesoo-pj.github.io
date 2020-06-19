<template>
  <div class="container">
    <Nav />
    <Panels />
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Panels from '@/components/Panels'

export default {
  components: { Panels, Nav },
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
