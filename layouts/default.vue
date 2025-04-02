<template>
  <Nuxt />
</template>

<script>
export default {
  mounted() {
    const viewportMeta = document.querySelector('meta[name="viewport"]')

    function adjustViewport() {
      if (screen.width <= 375) {
        viewportMeta.setAttribute('content', 'width=375px, user-scalable=0')
      } else {
        viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no')
      }
    }

    adjustViewport()
    window.addEventListener('resize', adjustViewport)
  }
}
</script>