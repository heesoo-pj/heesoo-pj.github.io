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
