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
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/main';
</style>
