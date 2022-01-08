<template>
  <div v-editable="blok">
    <div class="TextBlock" v-html="richtext"></div>
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

<style lang=scss>
  .TextBlock{
    padding: $padding-unit;
  }
</style>
