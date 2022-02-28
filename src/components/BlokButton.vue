<template>
  <g-link class="Button" v-editable="blok" :to="link"><div>{{ blok.text }}</div></g-link>
</template>

<script>
export default {
  props: ['blok'],
  data() {
    return {
      link: this.$getStoryblokLink(this.blok.target)
    }
  }
}
</script>

<style lang=scss>
  .Button, a.Button{
    background-color: $button-color;
    padding: $padding-unit $padding-unit * 3;
    color: $button-text-color;
    &:hover, &:visited {
      color: $button-text-color;
    }
    text-decoration: none;
    font-weight: bolder;
    /* box-shadow:  2px 2px 5px grey; */
    transition: box-shadow $transition;
    border-radius: $padding-unit * 2;
    &:hover {
      box-shadow: 0px 0px 10px rgba($shadow,0.8);
      color: $button-text-color;
    }
  }
</style>
