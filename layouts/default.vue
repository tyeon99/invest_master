<template>
  <Nuxt />
</template>

<script>
export default {
  mounted() {
    this.updateViewport()
    window.addEventListener('resize', this.updateViewport)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateViewport)
  },
  methods: {
    updateViewport() {
      if (screen.width <= 375) {
        document
          .querySelector('meta[name="viewport"]')
          .setAttribute('content', 'width=375px', 'user-scalable=0')
      } else {
        document
          .querySelector('meta[name="viewport"]')
          .setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no')
      }
    }
  }
}
</script>