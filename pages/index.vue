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
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/main';
</style>
