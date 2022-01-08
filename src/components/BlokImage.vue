<template>
  <div class="panel image" v-editable="blok" :style=style>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    style() {
      return {
        backgroundImage: `url('${ this.blok.image.filename }')`
      }
    }
  }
}
</script>

<style lang=scss scoped>
  .panel.image{
    min-height: 200px;
    background: rgba(white,0) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>
