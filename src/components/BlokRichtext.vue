<template>
  <div v-editable="blok">
    <div v-html="richtext"></div>
  </div>
</template>

<script>
  export default {
    props: ['blok'],
    computed: {
      richtext() {
        return this.blok.text ? this.$storyapi.richTextResolver.render(this.blok.text) : ''
      }
    }
  }
</script>
