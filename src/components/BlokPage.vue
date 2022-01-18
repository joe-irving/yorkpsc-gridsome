<template>
  <div>
    <component class="Blok" :class=blok.classes :key="blok._uid" v-for="blok in blok.body" :blok="blok" :is="'Blok'+blok.component">{{'Blok'+blok.component}}</component>
  </div>
</template>

<script>
export default {
  props: ['blok'],
}
</script>

<style lang=scss scoped>
  .Blok{
    &:first-child{
      padding-top: $header-height;
    }
  }
</style>
