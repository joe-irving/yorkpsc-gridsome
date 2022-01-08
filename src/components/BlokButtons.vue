<template>
  <div class="Buttons">
    <BlokButton v-for="blok in blok.Buttons" :blok="blok" :key="blok._uid"></BlokButton>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang=scss>
  .Buttons{
    display: flex;
    justify-content: space-around;
    gap: $padding-unit;
    padding: $padding-unit 0 ;
  }
</style>
