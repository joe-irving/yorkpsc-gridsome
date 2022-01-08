<template>
  <div
    class="group"
    :class="blok.direction"
    v-editable="blok"
    :style="{'background-image': 'url('+blok.background_image.filename+')'}"
    >
    <component  :class=blok.classes :key="blok._uid" v-for="blok in blok.bloks" :blok="blok" :is="'Blok'+blok.component" :style="childStyle"></component>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    siblings() {
      return this.blok.bloks.length
    },
    childStyle() {
      let styles = {}
      if (this.blok.direction == "columns"){
        styles.flexBasis = `${ 100 / this.blok.bloks.length }%`
      }
      return styles
    }
  }
}
</script>


<style lang="scss" scoped>
  .group{
    background: #ffffff no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    &.columns{
      flex-direction: row;
    }
    &.rows {
      flex-direction: column;
    }
  }
</style>
