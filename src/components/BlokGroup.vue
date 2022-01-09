<template>
  <div
    class="group"
    :class="parentClasses"
    v-editable="blok"
    :style="{'background-image': 'url('+blok.background_image.filename+')'}"
    :id=blok.slug
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
    },
    childComponents() {
      return this.blok.bloks.map((c) => c.component)
    },
    parentClasses() {
      return [
        this.blok.direction,
        this.childComponents.join('-'),
        ...this.childComponents
      ]
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
    @media screen and (max-width: $on-palm) {
      &.columns{
        flex-direction: column;
        &.Image-Richtext {
          flex-direction: column-reverse;
        }
      }
    }
    &.rows {
      flex-direction: column;
    }

  }
</style>
